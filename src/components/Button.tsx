import React from "react";
import { Link } from "react-router-dom";

export const Button = ({
  submit, // is submit type
  classes, // className props
  handleClick, // function to handle click
  body, // body of the button
  link, // is it link
  to, // link props
  value, // buttons value
  icon, // font awesome icon
  nav, // is it navigation button
  navExpanded, // navigation button props to toggle expand
}: {
  submit?: any;
  classes?: any;
  handleClick?: any;
  body?: any;
  link?: any;
  to?: any;
  value?: any;
  icon?: any;
  nav?: any;
  navExpanded?: any;
}) => {
  return (
    <>
      {!link ? (
        <button
          type={submit ? "submit" : "button"}
          className={classes}
          onClick={handleClick}
          value={value}
          aria-label={nav && "Toggle navigation"}
          aria-expanded={navExpanded}
        >
          {nav && <span className="navbar-toggler-icon" />}
          {icon && <i className={icon} aria-hidden="true" />} {body}
        </button>
      ) : (
        <Link type="button" className={classes} onClick={handleClick} to={to}>
          {icon && <i className={icon} aria-hidden="true" />} {body}
        </Link>
      )}
    </>
  );
};
