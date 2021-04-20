import React from "react";
import { Link, useHistory } from "react-router-dom";
import { AppBar, Tabs, Tab } from "@material-ui/core";

import { routes } from "constant";

export const Navigation = () => {
  const {
    location: { pathname },
  } = useHistory();
  return (
    <AppBar position="static">
      <Tabs variant="fullWidth" aria-label="nav tabs example">
        {routes.map(({ path, name }) => (
          <Tab
            label={name}
            selected={pathname === path}
            component={Link}
            to={path}
          />
        ))}
      </Tabs>
    </AppBar>
  );
};
