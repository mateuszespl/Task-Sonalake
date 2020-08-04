import React, { useState } from "react";
import { PaginationButton } from "./PaginationButton";

export const Pagination = ({
  currentPage,
  setCurrentPage,
  lastPage,
  firstPage,
}) => {
  const [buttonsData, setButtonsData] = useState([
    "Previous",
    "1",
    "2",
    "Next",
  ]);
  return (
    <nav aria-label="Data grid navigation">
      <ul className="pagination justify-content-end">
        {buttonsData.map((data) => (
          <PaginationButton
            lastPage={lastPage}
            firstPage={firstPage}
            key={data}
            text={data}
            currentPage={currentPage}
            handleClick={setCurrentPage}
          />
        ))}
      </ul>
    </nav>
  );
};
