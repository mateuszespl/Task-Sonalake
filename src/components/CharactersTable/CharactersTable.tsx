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

export const CharactersTable = () => {
  const dummyData = [
    {
      id: 1,
      name: "Luke Skywalker",
      species: "Human",
      gender: "male",
      homeworld: "Tatooine",
    },
    {
      id: 2,
      name: "C-3PO",
      species: "Droid",
      gender: "n/a",
      homeworld: "Tatooine",
    },
  ];
  return (
    <TableContainer component={Paper}>
      <Table>
        <CharactersTableHead />
        <TableBody>
          {dummyData.map(({ id, name, species, gender, homeworld }) => (
            <CharactersTableRow
              key={name}
              id={id}
              name={name}
              species={species}
              gender={gender}
              homeworld={homeworld}
            />
          ))}
        </TableBody>
      </Table>
      <TablePagination
        align="right"
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={dummyData.length}
        rowsPerPage={1}
        page={1}
        onChangePage={() => true}
        onChangeRowsPerPage={() => true}
      />
    </TableContainer>
  );
};