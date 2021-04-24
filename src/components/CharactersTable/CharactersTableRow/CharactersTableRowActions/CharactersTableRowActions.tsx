import React from "react";
import { Button, ButtonGroup, TableCell } from "@material-ui/core";
import { useHistory } from "react-router";

import { charactersTableRow } from "constant";
import charactersApiClient from "api/charactersApiClient";

export const CharactersTableRowActions = ({ id }: { id: number }) => {
  const history = useHistory();

  const handleDelete = () => {
    charactersApiClient
      .deleteCharacter({ id })
      .then((message) => console.log(message));
    //TODO -> toast/snackbar with info
  };

  const handleEdit = () => {
    history.push(`edit/${id}`);
  };
  return (
    <TableCell align="right">
      <ButtonGroup variant="contained">
        <Button onClick={handleEdit}>{charactersTableRow.editButton}</Button>
        <Button onClick={handleDelete}>
          {charactersTableRow.deleteButton}
        </Button>
      </ButtonGroup>
    </TableCell>
  );
};
