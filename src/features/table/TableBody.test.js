import React from "react";
import { TableBody } from "./TableBody";
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

test("<TableBody/> renders without data when api is down", async () => {
  const withRouter = (child) => <BrowserRouter>{child}</BrowserRouter>;
  const { getByTestId } = render(
    withRouter(
      <table>
        <TableBody searchValue="" searchedData={[]} characterDataArray={[]} />
      </table>
    )
  );
  const tableBody = getByTestId("tableBody");
  expect(tableBody.childNodes.length).toBe(0);
});

test("<TableBody/> render data from api ok", async () => {
  const withRouter = (child) => <BrowserRouter>{child}</BrowserRouter>;
  const { getByTestId } = render(
    withRouter(
      <table>
        <TableBody
          searchValue=""
          searchedData={[]}
          characterDataArray={mockAPI}
        />
      </table>
    )
  );
  const tableBody = getByTestId("tableBody");
  expect(tableBody.childNodes.length).toBe(mockAPI.length);
});

test("<TableBody/> render searched data through <ActionBar/> input", async () => {
  const withRouter = (child) => <BrowserRouter>{child}</BrowserRouter>;
  const { getByTestId } = render(
    withRouter(
      <table>
        <TableBody
          searchValue="Luke"
          searchedData={mockAPI.slice(0, 1)}
          characterDataArray={mockAPI}
        />
      </table>
    )
  );
  const tableBody = getByTestId("tableBody");
  expect(tableBody.childNodes.length).toBe(1);
});

test("<TableBody/> render No Results Found message if searchValue is not empty but there is no results", async () => {
  const withRouter = (child) => <BrowserRouter>{child}</BrowserRouter>;
  const { getByTestId } = render(
    withRouter(
      <table>
        <TableBody
          searchValue="Luke"
          searchedData={["Testing message"]}
          characterDataArray={mockAPI}
        />
      </table>
    )
  );
  const tableBody = getByTestId("tableBody");
  expect(tableBody.childNodes.length).toBe(1);
  expect(tableBody.childNodes[0].childNodes[0].textContent).toBe(
    "Testing message"
  );
});
