import React from "react";

import { TableRowActions } from "./TableRowActions";

export const TableRow = ({ character }) => {
  const { id, name, species, gender, homeworld } = character;
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{species}</td>
      <td>{gender}</td>
      <td>{homeworld}</td>
      <TableRowActions />
    </tr>
  );
};
