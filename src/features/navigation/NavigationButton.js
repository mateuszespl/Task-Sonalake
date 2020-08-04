import React from "react";
import classNames from "classnames";

export const NavigationButton = ({ isOpen, handleClick }) => {
  return (
    <button
      type="button"
      onClick={() => handleClick(!isOpen)}
      className={classNames("navbar-toggler", {
        collapsed: !isOpen,
      })}
      aria-expanded={isOpen}
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
  );
};
