import { useEffect, useState } from "react";

import { CharactersDataArray } from "types";
import charactersApiClient from "api/charactersApiClient";

export const useCharactersTable = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPageCharactersDataArr, setCurrentPageCharactersDataArr] =
    useState<CharactersDataArray>([]);
  const [allCharactersDataArr, setAllCharactersDataArr] =
    useState<CharactersDataArray>([]);

  const handlePageChange = (e: any, newPage: number) => {
    //TODO fix event type
    setCurrentPage(newPage);

    if (newPage === 0) {
      setCurrentPageCharactersDataArr(
        allCharactersDataArr.slice(0, rowsPerPage)
      );
    } else if (newPage === 1) {
      setCurrentPageCharactersDataArr(
        allCharactersDataArr.slice(rowsPerPage, 2 * rowsPerPage)
      );
    } else {
      const arrStart =
        currentPage > newPage
          ? (newPage + 1) * rowsPerPage
          : (currentPage + 1) * rowsPerPage;
      const arrEnd =
        newPage > currentPage
          ? (newPage + 1) * rowsPerPage
          : (currentPage + 1) * rowsPerPage;
      setCurrentPageCharactersDataArr(
        allCharactersDataArr.slice(arrStart, arrEnd)
      );
    }
  };

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(0);
    setRowsPerPage(Number(e.target.value));
    setCurrentPageCharactersDataArr(
      allCharactersDataArr.slice(0, Number(e.target.value))
    );
  };

  useEffect(() => {
    if (allCharactersDataArr.length === 0) {
      charactersApiClient
        .getCharacters()
        .then((charactersDataArr: CharactersDataArray) => {
          setAllCharactersDataArr(charactersDataArr);
          setCurrentPageCharactersDataArr(charactersDataArr.slice(0, 5));
        });
    }
  }, [allCharactersDataArr.length]);

  return {
    currentPageCharactersDataArr,
    allCharactersDataArr,
    currentPage,
    handlePageChange,
    rowsPerPage,
    handleRowsPerPageChange,
  };
};
