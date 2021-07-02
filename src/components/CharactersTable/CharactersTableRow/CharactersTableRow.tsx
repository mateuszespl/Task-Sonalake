import { TableCell, TableRow } from "@material-ui/core";
import React from "react";

import { CharacterData } from "types";
import { CharactersTableRowActions } from "./CharactersTableRowActions/CharactersTableRowActions";

export const CharactersTableRow = ({
  id,
  name,
  species,
  gender,
  homeworld,
}: CharacterData) => {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell align="right">{name}</TableCell>
      <TableCell align="right">{species}</TableCell>
      <TableCell align="right">{gender}</TableCell>
      <TableCell align="right">{homeworld}</TableCell>
      <CharactersTableRowActions id={id} name={name} />
    </TableRow>
  );
};
