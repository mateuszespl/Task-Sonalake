import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AppBar, Tabs, Tab } from "@material-ui/core";

import { routes } from "constant";

export const Navigation = () => {
  const appBarPosition = "static";
  const tabsVariant = "fullWidth";

  const {
    location: { pathname },
  } = useHistory();
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleChange = (e: any) => {
    //TODO - type this event
    const id = Number(e.currentTarget.dataset.id);
    setActiveTabIndex(id);
  };
  return (
    <AppBar position={appBarPosition}>
      <Tabs
        variant={tabsVariant}
        onChange={handleChange}
        value={activeTabIndex}
      >
        {routes.map(({ path, name }, id) => (
          <Tab
            data-id={id}
            key={path}
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
