import React from "react";
import { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import { NavigationButton } from "./NavigationButton";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-3">
      <Link to="/" className="navbar-brand">
        Sonalake Task
      </Link>
      <NavigationButton isOpen={isOpen} handleClick={setIsOpen} />
      <div
        className={classNames("collapse", "navbar-collapse", {
          show: isOpen,
        })}
      >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              List View
              <span className="sr-only">(current)</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
