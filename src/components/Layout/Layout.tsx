import React from "react";
import { Container } from "@material-ui/core";

import { Navigation } from "./Navigation/Navigation";

export const Layout = ({ children }: { children: React.ReactChild }) => {
  return (
    <main>
      <Navigation />
      <Container>{children}</Container>
    </main>
  );
};
