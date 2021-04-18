import React from "react";

import { Navigation } from "../features/navigation/Navigation";
import { CharacterForm } from "../features/characterForm/CharacterForm";

export const Edit = () => {
  return (
    <>
      <Navigation />
      <CharacterForm edit />
    </>
  );
};
