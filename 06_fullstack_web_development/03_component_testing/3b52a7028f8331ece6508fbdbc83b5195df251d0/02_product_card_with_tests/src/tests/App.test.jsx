import React from "react";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { App } from "../App";
import "@testing-library/jest-dom";

describe("App component", () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    cleanup();
  });

  test('check if name of game "The Legend Of Zelda: Breath of the Wild" is present ont eh page', () => {
    expect.assertions(1);
    const nameTextExists = screen.getByText("The Legend Of Zelda: Breath of the Wild");
    expect(nameTextExists).toBeInTheDocument();
  });

  //click on "See more" link

  test('click on "See more" link & check if text on it includes "Cannot GET"', async () => {
    expect.assertions(1);
    fireEvent.click(screen.getByText("See more"));

    const content = queryAllByText("See more");
    await waitForElement(() => content);

    const errorTextExists = screen.getByText("Cannot GET");
    expect(content).toHaveTextContent(errorTextExists);
  });

  //go back to previsous page ?

  //click on button "Show screenshots"

  //check that button "X" is present
});
