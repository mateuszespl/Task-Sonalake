import React from "react";
import { Table } from "./Table";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

test("<Table/> renders ok", async () => {
  const withRouter = (child) => <BrowserRouter>{child}</BrowserRouter>;
  const { getByTestId } = render(
    withRouter(
      <Table
        searchValue=""
        characterData={{
          data: [],
          lastPage: true,
          firstPage: false,
          numberOfPages: 100,
        }}
      />
    )
  );
  const tableSection = getByTestId("tableSection");
  expect(tableSection.childNodes.length).toBe(2);
});
