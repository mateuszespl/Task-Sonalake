import React from "react";

import { CharacterForm } from "../../features/characterForm/CharacterForm";
import { Layout } from "components/Layout/Layout";

export const Add = () => {
  return (
    <Layout>
      <CharacterForm edit={true} />
    </Layout>
  );
};
