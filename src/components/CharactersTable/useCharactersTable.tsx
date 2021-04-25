import { useEffect, useState } from "react";

import { CharactersDataArray } from "types";
import charactersApiClient from "api/charactersApiClient";

export const useCharactersTable = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [
    charactersDataArr,
    setCharactersDataArr,
  ] = useState<CharactersDataArray>([]);

  const handlePageChange = (e: any, newPage: number) => {
    //TODO fix event type
    setCurrentPage(newPage);
  };

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(0);
    setRowsPerPage(Number(e.currentTarget.value));
  };

  useEffect(() => {
    if (charactersDataArr.length === 0) {
      charactersApiClient
        .getCharacters()
        .then((charactersDataArr: CharactersDataArray) =>
          setCharactersDataArr(charactersDataArr)
        );
    }
  }, [charactersDataArr.length]);

  return {
    charactersDataArr,
    currentPage,
    handlePageChange,
    rowsPerPage,
    handleRowsPerPageChange,
  };
};
