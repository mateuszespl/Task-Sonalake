import React from "react";
import { Main } from "./Main";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

test("<Main/> renders ok", async () => {
  const withRouter = (child) => <BrowserRouter>{child}</BrowserRouter>;
  const { getByTestId } = render(withRouter(<Main />));
  const main = getByTestId("main");
  expect(main.childNodes.length).toBe(2);
});
