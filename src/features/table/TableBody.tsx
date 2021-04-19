import React from "react";

import { TableRow } from "./TableRow";

export const TableBody = ({
  searchValue,
  searchedData,
  characterDataArray,
  currentPage,
  setCharacterData,
}: {
  searchValue: any;
  searchedData: any;
  characterDataArray: any;
  currentPage: any;
  setCharacterData: any;
}) => {
  return (
    <tbody data-testid="tableBody">
      {(searchValue.length ? searchedData : characterDataArray).map(
        (character: any, id: any) =>
          // validation if prop character is an object for displaying either <TableRow/> or No results found message
          typeof character === "object" ? (
            <TableRow
              key={id}
              currentPage={currentPage}
              setCharacterData={setCharacterData}
              character={character}
            />
          ) : (
            <tr key="err">
              {/* character here is equal to No results found string */}
              <td>{character}</td>
              <td>X</td>
              <td>X</td>
              <td>X</td>
              <td>X</td>
              <td>X</td>
            </tr>
          )
      )}
    </tbody>
  );
};
