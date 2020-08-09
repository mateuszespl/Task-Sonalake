import React from "react";
import { PaginationButton } from "./PaginationButton";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

test("<PaginationButton/> renders ok", async () => {
  const withRouter = (child) => <BrowserRouter>{child}</BrowserRouter>;
  const { getByTestId } = render(withRouter(<PaginationButton text={4} />));
  const paginationButton = getByTestId("paginationButton");
  expect(paginationButton.childNodes.length).toBe(1);
  expect(paginationButton.childNodes[0].textContent).toBe(" 4");
});

test("<PaginationButton/> is disabled when needed", async () => {
  const withRouter = (child) => <BrowserRouter>{child}</BrowserRouter>;
  const { getByTestId } = render(
    withRouter(
      <PaginationButton text={"Previous"} currentPage={1} firstPage={true} />
    )
  );
  const paginationButton = getByTestId("paginationButton");
  expect(paginationButton.className).toContain("disabled");
});
