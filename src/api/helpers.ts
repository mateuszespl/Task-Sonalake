//
// FETCH CHARACTERS HELPER FUNCTION
//

export const fetchCharacters = (setCharacterData, page, sort, sortParameter) =>
  fetch(
    `http://localhost:3000/characters?_page=${page}&_limit=10${
      sort && `&_sort=${sortParameter}&_order=${sort}`
    }`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  )
    // fetching character data from api, limited to 10 results
    .then((res) => {
      // extracting data (headers) that helps to paginate at client side
      return {
        data: res.json(),
        headers: res.headers.get("Link"),
        url: res.url,
        ok: res.ok,
      };
    })
    .then(({ data, headers, url, ok }) => {
      const headersArray = headers
        .split(", ")
        .map((arrItem) => arrItem.split("; ")[0]);
      data.then((data) =>
        setCharacterData({
          // extracted data is used to create object with data and pagination helpers
          ok,
          firstPage: `<${url}>` === headersArray[0],
          lastPage: `<${url}>` === headersArray[headersArray.length - 1],
          numberOfPages: Number(
            headersArray[headersArray.length - 1]
              .split("page=")[1]
              .split("&_")[0]
          ),
          data,
        })
      );
    })
    .catch((err) => console.log(err));

//
// SEARCH/FILTER CHARACTERS HELPER FUNCTION
//

export const filterCharacters = (setSearchedData, searchValue, formFilter) => {
  fetch(
    `http://localhost:3000/characters?${
      formFilter ? "id" : "q"
    }=${searchValue}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  )
    // filtering through data to get single result for <CharacterForm/> or multiple results for <ActionBar/> input
    .then((res) => res.json())
    .then((data) =>
      data.length === 0
        ? setSearchedData(["No Results Found"])
        : formFilter
        ? setSearchedData({
            nameValue: data[0].name,
            speciesValue: data[0].species,
            genderValue: data[0].gender,
            homeworldValue: data[0].homeworld,
          })
        : setSearchedData(data)
    );
};

//
// FETCH ALL SPECIES HELPER FUNCTION
//

export const fetchSpecies = (setSpecies) =>
  fetch(`http://localhost:3000/species`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => setSpecies(data));

//
// DELETE CHARACTER FROM DB HELPER FUNCTION
//

export const deleteCharacter = (id) =>
  fetch(`http://localhost:3000/characters/${id}`, {
    method: "DELETE",
  });

//
// ADD NEW CHARACTER TO DB HELPER FUNCTION
//

export const addCharacter = ({
  nameValue,
  speciesValue,
  genderValue,
  homeworldValue,
}) => {
  fetch(`http://localhost:3000/characters`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: nameValue,
      species: speciesValue,
      gender: genderValue,
      homeworld: homeworldValue,
    }),
  });
};

//
// CHANGE EXISTING CHARACTER DATA IN DB HELPER FUNCTION
//

export const editCharacter = ({
  id,
  nameValue,
  speciesValue,
  genderValue,
  homeworldValue,
}) => {
  fetch(`http://localhost:3000/characters/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: nameValue,
      species: speciesValue,
      gender: genderValue,
      homeworld: homeworldValue,
    }),
  });
};
