import React from "react";
import { Pagination } from "./Pagination";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

test("<Pagination/> renders ok", async () => {
  const withRouter = (child) => <BrowserRouter>{child}</BrowserRouter>;
  const { getByTestId } = render(withRouter(<Pagination />));
  const pagination = getByTestId("pagination");
  expect(pagination.childNodes.length).toBe(1);
});

test("<Pagination/> all buttons are rendered ok", async () => {
  const withRouter = (child) => <BrowserRouter>{child}</BrowserRouter>;
  const { getByTestId } = render(withRouter(<Pagination numberOfPages={15} />));
  const paginationList = getByTestId("paginationList");
  expect(paginationList.childNodes.length).toBe(17);
  expect(paginationList.childNodes[0].textContent).toBe(" Previous");
  expect(paginationList.childNodes[paginationList.childNodes.length - 1].textContent).toBe(" Next");
});
