import React from "react";
import classNames from "classnames";

import { Routes } from "./Routes";

export const App = () => {
  return (
    // main component for adding Redux / Themes etc.
    <div className={classNames("app")}>
      <Routes />
    </div>
  );
};
