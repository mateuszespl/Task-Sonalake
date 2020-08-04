export const fetchCharacters = (setCharacterData, page) =>
  fetch(`http://localhost:3000/characters?_page=${page}&_limit=10`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
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
          ok,
          firstPage: `<${url}>` === headersArray[0],
          lastPage: `<${url}>` === headersArray[headersArray.length - 1],
          data,
        })
      );
    })
    .catch((err) => console.log(err));

export const filterCharacters = (setSearchedData, searchValue) => {
  fetch(`http://localhost:3000/characters?_limit=10&q=${searchValue}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => setSearchedData(data));
};
