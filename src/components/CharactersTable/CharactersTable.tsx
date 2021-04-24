import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

import charactersApiClient from "api/charactersApiClient";
import { CharactersTableHead } from "./CharactersTableHead/CharactersTableHead";
import { CharactersTableRow } from "./CharactersTableRow/CharactersTableRow";
import { CharactersDataArray } from "types";

export const CharactersTable = () => {
  const [
    charactersDataArr,
    setCharactersDataArr,
  ] = useState<CharactersDataArray>([]);

  useEffect(() => {
    if (charactersDataArr.length === 0) {
      charactersApiClient
        .getCharacters()
        .then((charactersDataArr: CharactersDataArray) =>
          setCharactersDataArr(charactersDataArr)
        );
    }
  }, [charactersDataArr.length]);
  return (
    <TableContainer component={Paper}>
      <Table>
        <CharactersTableHead />
        <TableBody>
          {charactersDataArr.map(({ id, name, species, gender, homeworld }) => (
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
        count={charactersDataArr.length}
        rowsPerPage={5}
        page={1}
        onChangePage={() => true}
        onChangeRowsPerPage={() => true}
      />
    </TableContainer>
  );
};
