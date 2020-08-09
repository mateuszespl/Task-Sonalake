import React from "react";
import { CharacterForm } from "./CharacterForm";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

test("<CharacterForm/> renders ok", async () => {
  const withRouter = (child) => <BrowserRouter>{child}</BrowserRouter>;
  const { getByTestId } = render(withRouter(<CharacterForm />));
  const form = getByTestId("form");
  expect(form.childNodes.length).toBe(5);
});
