import React from "react";
import { Select } from "./Select";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

const mockAPI = ["Aleena", "Besalisk", "Cerean", "Chagrian", "Clawdite"];

test("<Select/> renders all options", async () => {
  const withRouter = (child) => <BrowserRouter>{child}</BrowserRouter>;
  const { getByTestId } = render(withRouter(<Select species={mockAPI} />));
  const select = getByTestId("select");
  expect(select.childNodes.length).toBe(mockAPI.length + 1);
});

test("<Select/> renders feedback message if is invalid", async () => {
  const withRouter = (child) => <BrowserRouter>{child}</BrowserRouter>;
  const { getByTestId } = render(
    withRouter(<Select species={mockAPI} speciesValue="" formIsValid={false} />)
  );
  const feedback = getByTestId("feedback");
  expect(feedback.innerHTML).toBe(
    "You have to select species for the character."
  );
});
