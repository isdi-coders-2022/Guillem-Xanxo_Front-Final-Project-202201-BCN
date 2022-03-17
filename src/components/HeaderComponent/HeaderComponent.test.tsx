import { render, screen } from "@testing-library/react";
import HeaderComponent from "./HeaderComponent";
import { BrowserRouter } from "react-router-dom";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should render a heading", () => {
      render(
        <BrowserRouter>
          <HeaderComponent />
        </BrowserRouter>
      );

      const expectedh1 = screen.getByRole("heading");

      expect(expectedh1).toBeInTheDocument();
    });

    test("Then it should render a button", () => {
      render(
        <BrowserRouter>
          <HeaderComponent />
        </BrowserRouter>
      );

      const expectedButton = screen.getByRole("button");

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
