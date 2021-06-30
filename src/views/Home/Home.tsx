import React from "react";
import { Box, Grid } from "@material-ui/core";

import { Layout } from "components/Layout/Layout";
import { ActionBar } from "components/ActionBar/ActionBar";
import { CharactersTable } from "components/CharactersTable/CharactersTable";

export const Home = () => {
  return (
    <Layout>
      <Grid container direction="column">
        <ActionBar />
        <Box mt={3}>
          <CharactersTable />
        </Box>
      </Grid>
    </Layout>
  );
};
