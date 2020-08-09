import React from "react";

import { deleteCharacter, fetchCharacters } from "../../api/helpers";
import { Button } from "./../../components/Button";

export const TableRowActions = ({ id, setCharacterData, currentPage }) => {
  return (
    <td data-testid="tableRowActions">
      <div
        className="btn-group btn-group-sm d-flex justify-content-center align-items-center"
        role="group"
        aria-label="Actions"
      >
        <Button
          link
          to={`/edit/${id}`}
          classes="btn btn-secondary"
          body="Edit"
          icon="fa fa-pencil"
        />
        <Button
          classes="btn btn-danger"
          handleClick={() => {
            deleteCharacter(id);
            fetchCharacters(setCharacterData, currentPage);
          }}
          icon="fa fa-trash-o"
          body="Remove"
        />
      </div>
    </td>
  );
};
