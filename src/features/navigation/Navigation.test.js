import React from "react";
import { Navigation } from "./Navigation";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { navigationRoutes } from "./constants";

test("<Navigation/> renders ok", async () => {
  const withRouter = (child) => <BrowserRouter>{child}</BrowserRouter>;
  const { getByTestId } = render(withRouter(<Navigation />));
  const nav = getByTestId("navigation");
  expect(nav.childNodes.length).toBe(3);
});

test("<Navigation/> renders all routes", async () => {
  const withRouter = (child) => <BrowserRouter>{child}</BrowserRouter>;
  const { getByTestId } = render(withRouter(<Navigation />));
  const nav = getByTestId("navbarList");
  expect(nav.childNodes.length).toBe(navigationRoutes.length);
});
