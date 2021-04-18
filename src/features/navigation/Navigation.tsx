import React from "react";
import { useState } from "react";
import classNames from "classnames";
import { useHistory } from "react-router-dom";

import { Button } from "../../components/Button";
import { navigationRoutes } from "./constants";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false); // is navbar open state
  const history = useHistory();
  return (
    <nav
      data-testid="navigation"
      className="navbar navbar-expand-md navbar-dark bg-dark bg-primary mb-3 px-5"
    >
      <Button
        link
        to="/"
        classes="navbar-brand font-weight-bold"
        body="Sonalake Task"
        icon="fa fa-code"
      />
      {/* Navbar button that handles navbar collapsing */}
      <Button
        handleClick={() => setIsOpen(!isOpen)}
        classes={classNames("navbar-toggler", {
          collapsed: !isOpen,
        })}
        nav
        navExpanded={isOpen}
      />
      <div
        className={classNames("collapse", "navbar-collapse", {
          show: isOpen,
        })}
      >
        <ul data-testid="navbarList" className="navbar-nav">
          {/* creating static client side routes */}
          {navigationRoutes.map(({ to, body }) => (
            <li
              className={classNames("nav-item", {
                active: history.location.pathname === to,
              })}
              key={to}
            >
              <Button
                link
                to={to}
                classes="nav-link"
                handleClick={() => setIsOpen(false)}
                body={body}
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
