import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is invoked", () => {
    test("Then it should render a h1 element", () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
    });
  });
  test("Then it should render the text 'Transporta't Pallars'", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
});
