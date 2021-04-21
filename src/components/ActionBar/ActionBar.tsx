import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { actionBar, routes } from "constant";

export const ActionBar = () => {
  const { register } = useForm({
    mode: "onChange",
  });
  return (
    <Grid container spacing={6} direction="row" justify="space-between">
      <Grid item xs>
        <TextField
          fullWidth
          label={actionBar.textField.label}
          variant="outlined"
          size="small"
          {...register(actionBar.textField.name)}
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
