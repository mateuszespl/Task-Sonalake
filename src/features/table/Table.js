import React from "react";

import { TableRow } from "./TableRow";
import { Pagination } from "./Pagination";
import { tableHeaderData } from "./constants";

export const Table = ({
  characterData,
  setCurrentPage,
  currentPage,
  searchedData,
}) => {
  const { data: characterDataArray, lastPage, firstPage } = characterData;
  return (
    <>
      <table className="table table-bordered table-hover">
        <thead className="thead-light">
          <tr>
            {tableHeaderData.map((data) => (
              <th scope="col" key={data}>
                {data}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(searchedData.length > 0 ? searchedData : characterDataArray).map(
            (character, id) => (
              <TableRow key={id} character={character} />
            )
          )}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        lastPage={lastPage}
        firstPage={firstPage}
      />
    </>
  );
};
