import React from "react";
import classNames from "classnames";

import { Routes } from "./Routes";

export const App = () => {
  return (
    <div className={classNames("container")}>
      <Routes />
    </div>
  );
};
