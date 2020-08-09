import React from "react";
import { ActionBar } from "./ActionBar";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

test("<ActionBar/> renders ok", async () => {
  const withRouter = (child) => <BrowserRouter>{child}</BrowserRouter>;
  const { getByTestId } = render(withRouter(<ActionBar searchValue="test" />));
  const section = getByTestId("actionBarSection");
  expect(section.childNodes.length).toBe(2);
});

test("<ActionBar/> input renders ok default value", async () => {
  const withRouter = (child) => <BrowserRouter>{child}</BrowserRouter>;
  const { getByLabelText } = render(
    withRouter(<ActionBar searchValue="test" />)
  );
  const input = getByLabelText("Search");
  expect(input.value).toBe("test");
});

test("<ActionBar/> button renders ok", async () => {
  const withRouter = (child) => <BrowserRouter>{child}</BrowserRouter>;
  const { getByText } = render(withRouter(<ActionBar searchValue="test" />));
  const button = getByText("Add new character");
  expect(button).toHaveClass("btn btn-primary mb-3");
  expect(button.innerHTML).toBe(" Add new character");
});
