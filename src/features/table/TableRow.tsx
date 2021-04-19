import React from "react";

import { TableRowActions } from "./TableRowActions";

export const TableRow = ({
  character,
  currentPage,
  setCharacterData,
}: {
  character: any;
  currentPage: any;
  setCharacterData: any;
}) => {
  const { id, name, species, gender, homeworld } = character;
  return (
    <tr data-testid="tableRow">
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{species}</td>
      <td>{gender}</td>
      <td>{homeworld}</td>
      <TableRowActions
        currentPage={currentPage}
        setCharacterData={setCharacterData}
        id={id}
      />
    </tr>
  );
};
