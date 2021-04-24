import React from "react";
import { Grid } from "@material-ui/core";

import { Layout } from "components/Layout/Layout";
import { ActionBar } from "components/ActionBar/ActionBar";
import { CharactersTable } from "components/CharactersTable/CharactersTable";

export const Home = () => {
  return (
    <Layout>
      <Grid>
        <ActionBar />
        <CharactersTable />
      </Grid>
    </Layout>
  );
};
