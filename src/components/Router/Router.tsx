import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { routes } from "constant";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(({ routerPath, component, exact }) => (
          <Route
            key={routerPath}
            exact={exact}
            render={component}
            path={routerPath}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};
