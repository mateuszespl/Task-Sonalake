import React from "react";
import { TableHeader } from "./TableHeader";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { tableHeaderData } from "./constants";

test("<TableHeader/> render all headers", async () => {
  const withRouter = (child) => <BrowserRouter>{child}</BrowserRouter>;
  const { getByTestId } = render(
    withRouter(
      <table>
        <TableHeader />
      </table>
    )
  );
  const tableHeader = getByTestId("tableHeader");
  expect(tableHeader.childNodes.length).toBe(tableHeaderData.length);
});
