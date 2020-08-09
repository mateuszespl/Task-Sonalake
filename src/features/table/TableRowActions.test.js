import React from "react";
import { TableRowActions } from "./TableRowActions";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

test("<TableRowActions/> renders ok", async () => {
  const withRouter = (child) => <BrowserRouter>{child}</BrowserRouter>;
  const { getByTestId } = render(
    withRouter(
      <table>
        <tbody>
          <tr>
            <TableRowActions />
          </tr>
        </tbody>
      </table>
    )
  );
  const tableRowActions = getByTestId("tableRowActions");
  expect(tableRowActions.childNodes.length).toBe(1);
});

test("<TableRowActions/> renders both action buttons", async () => {
  const withRouter = (child) => <BrowserRouter>{child}</BrowserRouter>;
  const { getByTestId } = render(
    withRouter(
      <table>
        <tbody>
          <tr>
            <TableRowActions />
          </tr>
        </tbody>
      </table>
    )
  );
  const tableRowActions = getByTestId("tableRowActions");
  expect(tableRowActions.childNodes[0].childNodes.length).toBe(2);
});
