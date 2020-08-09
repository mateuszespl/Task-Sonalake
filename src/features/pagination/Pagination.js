import React, { useState } from "react";
import { useEffect } from "react";

import { PaginationButton } from "./PaginationButton";

export const Pagination = ({
  currentPage,
  setCurrentPage,
  lastPage,
  firstPage,
  disabled,
  numberOfPages,
}) => {
  const [buttonsData, setButtonsData] = useState([]); // buttonsData state

  // handling buttonsData changes, it creates new buttons for every 10 new db results
  useEffect(() => {
    const buttonsDataArray = [...new Array(numberOfPages)].map(
      (value, index) => index + 1
    );
    setButtonsData(["Previous", ...buttonsDataArray, "Next"]);
  }, [numberOfPages]);
  return (
    <nav data-testid="pagination" aria-label="table-navigation">
      <ul
        data-testid="paginationList"
        className="pagination justify-content-end"
      >
        {buttonsData.map((data) => (
          <PaginationButton
            disabled={disabled}
            lastPage={lastPage}
            firstPage={firstPage}
            key={data}
            text={data}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        ))}
      </ul>
    </nav>
  );
};