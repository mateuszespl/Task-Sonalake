import React from "react";

import { CharacterForm } from "../../features/characterForm/CharacterForm";
import { Layout } from "components/Layout/Layout";

export const Edit = () => {
  return (
    <Layout>
      <CharacterForm edit />
    </Layout>
  );
};
