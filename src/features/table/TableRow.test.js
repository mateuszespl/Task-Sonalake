import React from "react";
import { TableRow } from "./TableRow";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

const mockAPI = [
  {
    id: 1,
    name: "Luke Skywalker",
    species: "Human",
    gender: "male",
    homeworld: "Tatooine",
  },
  {
    id: 2,
    name: "C-3PO",
    species: "Droid",
    gender: "n/a",
    homeworld: "Tatooine",
  },
];

test("<TableRow/> renders ok", async () => {
  const withRouter = (child) => <BrowserRouter>{child}</BrowserRouter>;
  const { getByTestId } = render(
    withRouter(
      <table>
        <tbody>
          <TableRow character={mockAPI} />
        </tbody>
      </table>
    )
  );
  const tableRow = getByTestId("tableRow");
  expect(tableRow.childNodes.length).toBe(6);
});
