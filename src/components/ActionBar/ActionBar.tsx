import { Button, Grid, TextField } from "@material-ui/core";
import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import charactersApiClient from "api/charactersApiClient";

import { actionBar, routes } from "constant";
import { debounce } from "lodash";

export const ActionBar = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    charactersApiClient
      .getCharacterByName({ name: e.target.value })
      .then((data) => console.log(data));
  };
  const debouncedHandleChange = useCallback(debounce(handleChange, 500), []);
  return (
    <Grid container spacing={6} direction="row" justify="space-between">
      <Grid item xs>
        <TextField
          fullWidth
          label={actionBar.textField.label}
          variant="outlined"
          size="small"
          onChange={(e) => {
            e.persist();
            debouncedHandleChange(e as any);
          }}
        />
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
