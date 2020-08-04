import React from "react";
import classNames from "classnames";

export const PaginationButton = ({
  firstPage,
  lastPage,
  text,
  handleClick,
  currentPage,
}) => {
  return (
    <li
      className={classNames(
        "page-item",
        {
          disabled:
            text === "Previous" && firstPage
              ? true
              : text === "Next" && lastPage
              ? true
              : undefined,
        },
        { active: currentPage == text }
      )}
    >
      <button
        type="button"
        className="page-link"
        value={text}
        onClick={() => {
          switch (text) {
            case "Next":
              return handleClick(currentPage + 1);
              break;
            case "Previous":
              return handleClick(currentPage - 1);
            default:
              return handleClick(Number(text));
          }
        }}
      >
        {text}
      </button>
    </li>
  );
};
