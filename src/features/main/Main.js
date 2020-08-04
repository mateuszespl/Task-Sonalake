import React, { useState, useEffect } from "react";

import { Navigation } from "../navigation/Navigation";
import { Form } from "../form/Form";
import { Table } from "../table/Table";
import { fetchCharacters } from "../../api/helpers";

export const Main = () => {
  const [characterData, setCharacterData] = useState({
    data: [],
    ok: false,
    last: false,
    first: true,
  });
  const [searchedData, setSearchedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchCharacters(setCharacterData, currentPage);
  }, [currentPage]);
  return (
    <main>
      <Navigation />
      <Form setSearchedData={setSearchedData} />
      <Table
        characterData={characterData}
        searchedData={searchedData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </main>
  );
};
