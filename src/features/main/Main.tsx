import React, { useState, useEffect } from "react";

import { ActionBar } from "../actionbar/ActionBar";
import { Table } from "../table/Table";
import { fetchCharacters } from "../../api/helpers";
import charactersApiClient from "api/charactersApiClient";

export const Main = () => {
  const [characterData, setCharacterData] = useState({
    data: [],
    ok: false,
    last: false,
    first: true,
  }); // character data object with data array and some pagination helpers
  const [searchedData, setSearchedData] = useState([]); // state that contains data searched through <ActionBar/> input
  const [currentPage, setCurrentPage] = useState(1); // currentPage state, for pagination
  const [searchValue, setSearchValue] = useState(""); // <ActionBar/> input value state

  // page change handler, it fetches results from db based on current page
  useEffect(() => {
    charactersApiClient
      .getCharacters()
      .then((data: any) => setSearchedData(data));
  }, [currentPage]);
  return (
    <main data-testid="main" className="main container">
      <ActionBar
        setSearchedData={setSearchedData}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Table
        searchValue={searchValue}
        characterData={characterData}
        searchedData={searchedData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setCharacterData={setCharacterData}
      />
    </main>
  );
};
