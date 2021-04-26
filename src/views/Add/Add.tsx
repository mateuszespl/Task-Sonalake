import React from "react";

import { Layout } from "components/Layout/Layout";
import { CharacterForm } from "components/CharacterForm/CharacterForm";

export const Add = () => {
  return (
    <Layout>
      <CharacterForm isAddCharacterFormVariant />
    </Layout>
  );
};
