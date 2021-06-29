import { Button, Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import { actionBar, routes } from "constant";
import { ActionBarInput } from "./ActionBarInput/ActionBarInput";

export const ActionBar = () => {
  return (
    <Grid container spacing={6} direction="row" justify="space-between">
      <Grid item xs>
        <ActionBarInput />
      </Grid>
      <Grid item>
        <Button
          component={Link}
          to={routes.add.path}
          variant="contained"
          color="secondary"
        >
          {actionBar.button}
        </Button>
      </Grid>
    </Grid>
  );
};
