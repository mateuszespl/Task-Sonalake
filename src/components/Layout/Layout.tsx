import React from "react";
import { Container } from "@material-ui/core";

import { Navigation } from "./Navigation/Navigation";

export const Layout = ({ children }: { children: React.ReactChild }) => {
  const containerStyle = { padding: "30px" };
  return (
    <main id="main">
      <Navigation />
      <Container style={containerStyle} id="mainWrapper">
        {children}
      </Container>
    </main>
  );
};
