import React from "react";
import { Container } from "@material-ui/core";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Navigation } from "./Navigation/Navigation";

export const Layout = ({ children }: { children: React.ReactChild }) => {
  const toastPosition = "bottom-left";
  const containerStyle = { padding: "30px" };
  return (
    <main id="main">
      <Navigation />
      <Container style={containerStyle} id="mainWrapper">
        {children}
      </Container>
      <ToastContainer position={toastPosition} />
    </main>
  );
};
