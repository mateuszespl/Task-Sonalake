import React from "react";
import classNames from "classnames";

import { Button } from "../../components/Button";

export const PaginationButton = ({
  firstPage,
  lastPage,
  text,
  setCurrentPage,
  currentPage,
  disabled,
}) => {
  // function for changing current page
  const handleClick = () => {
    switch (text) {
      case "Next":
        return setCurrentPage(currentPage + 1);
      case "Previous":
        return setCurrentPage(currentPage - 1);
      default:
        return setCurrentPage(Number(text));
    }
  };
  return (
    <li
      data-testid="paginationButton"
      className={classNames(
        "page-item",
        {
          disabled:
            disabled ||
            (text === "Previous" && firstPage
              ? true
              : text === "Next" && lastPage
              ? true
              : undefined),
        },
        { active: currentPage === text }
      )}
    >
      <Button
        classes="page-link"
        value={text}
        body={text}
        handleClick={() => handleClick()}
      />
    </li>
  );
};
