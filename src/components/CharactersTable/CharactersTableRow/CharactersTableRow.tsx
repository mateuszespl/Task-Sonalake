import { Button, ButtonGroup, TableCell, TableRow } from "@material-ui/core";
import React from "react";

import { charactersTableRow } from "constant";

type CharacterData = {
  id: number;
  name: string;
  species: string;
  gender: string;
  homeworld: string;
};

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
      <TableCell align="right">
        <ButtonGroup variant="contained">
          <Button>{charactersTableRow.editButton}</Button>
          <Button>{charactersTableRow.deleteButton}</Button>
        </ButtonGroup>
      </TableCell>
    </TableRow>
  );
};
