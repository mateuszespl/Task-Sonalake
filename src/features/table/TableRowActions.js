import React from "react";

export const TableRowActions = () => {
  return (
    <td>
      <div className="btn-group btn-group-sm" role="group" aria-label="Actions">
        <button type="button" className="btn btn-secondary">
          <i className="fa fa-pencil" aria-hidden="true" /> Edit
        </button>
        <button type="button" className="btn btn-danger">
          <i className="fa fa-trash-o" aria-hidden="true" /> Remove
        </button>
      </div>
    </td>
  );
};
