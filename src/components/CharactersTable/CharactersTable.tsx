import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
} from "@material-ui/core";
import React from "react";

import { CharactersTableHead } from "./CharactersTableHead/CharactersTableHead";
import { CharactersTableRow } from "./CharactersTableRow/CharactersTableRow";
import { useCharactersTable } from "./useCharactersTable";

export const CharactersTable = () => {
  const {
    currentPage,
    handlePageChange,
    rowsPerPage,
    handleRowsPerPageChange,
    currentPageCharactersDataArr,
    allCharactersDataArr,
  } = useCharactersTable();
  return (
    <TableContainer component={Paper}>
      <Table>
        <CharactersTableHead />
        <TableBody>
          {currentPageCharactersDataArr.map(
            ({ id, name, species, gender, homeworld }) => (
              <CharactersTableRow
                key={name}
                id={id}
                name={name}
                species={species}
                gender={gender}
                homeworld={homeworld}
              />
            )
          )}
        </TableBody>
      </Table>
      <TablePagination
        align="right"
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={allCharactersDataArr.length}
        rowsPerPage={rowsPerPage}
        page={currentPage}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleRowsPerPageChange}
      />
    </TableContainer>
  );
};
