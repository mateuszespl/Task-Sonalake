import React from "react";

import { Pagination } from "../pagination/Pagination";
import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";

export const Table = ({
  characterData,
  setCurrentPage,
  currentPage,
  searchedData,
  searchValue,
  setCharacterData,
}) => {
  const {
    data: characterDataArray, // actual character array
    lastPage, // prop for pagination
    firstPage, // prop for pagination
    numberOfPages, //prop for pagination
  } = characterData;
  return (
    <section data-testid="tableSection" className="table">
      <table className="table table-bordered table-hover">
        <TableHeader
          setCharacterData={setCharacterData}
          characterDataArray={characterDataArray}
          currentPage={currentPage}
        />
        <TableBody
          currentPage={currentPage}
          setCharacterData={setCharacterData}
          searchValue={searchValue}
          searchedData={searchedData}
          characterDataArray={characterDataArray}
        />
      </table>
      <Pagination
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        lastPage={lastPage}
        firstPage={firstPage}
        disabled={searchValue.length > 0}
      />
    </section>
  );
};
