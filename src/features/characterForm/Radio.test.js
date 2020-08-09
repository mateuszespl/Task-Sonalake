import React from "react";
import { Radio } from "./Radio";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

test("<Radio/> renders all radios", async () => {
  const withRouter = (child) => <BrowserRouter>{child}</BrowserRouter>;
  const { getByTestId } = render(withRouter(<Radio />));
  const radioWrapper = getByTestId("radioWrapper");
  expect(radioWrapper.childNodes.length).toBe(3);
});

test("<Radio/> renders feedback message if is invalid", async () => {
  const withRouter = (child) => <BrowserRouter>{child}</BrowserRouter>;
  const { getByTestId } = render(
    withRouter(<Radio formIsValid={false} genderValue="" />)
  );
  const feedback = getByTestId("feedback");
  expect(feedback.innerHTML).toBe(
    "You have to select gender of the character."
  );
});
