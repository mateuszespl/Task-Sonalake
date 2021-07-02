import React from "react";
import { Button, ButtonGroup, TableCell } from "@material-ui/core";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

import { charactersTableRow } from "constant";
import charactersApiClient from "api/charactersApiClient";

export const CharactersTableRowActions = ({
  id,
  name,
}: {
  id: number;
  name: string;
}) => {
  const history = useHistory();

  const handleDelete = () => {
    charactersApiClient
      .deleteCharacter({ id, name })
      .then(({ message, type }) => toast(message, { type }));
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
