import React from "react";
import { TableCell, TableHead, TableRow } from "@material-ui/core";

import { charactersTableHeadCells } from "constant";

type TableCellAlign =
  | "inherit"
  | "left"
  | "center"
  | "right"
  | "justify"
  | undefined;

export const CharactersTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        {Object.values(charactersTableHeadCells).map(({ name, align }) => (
          <TableCell align={align as TableCellAlign}>{name}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
