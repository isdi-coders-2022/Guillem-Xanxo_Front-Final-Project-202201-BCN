import { render, screen } from "@testing-library/react";
import HeaderComponent from "./HeaderComponent";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should render a heading", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <HeaderComponent />
          </Provider>
        </BrowserRouter>
      );

      const expectedh1 = screen.getByRole("heading");

      expect(expectedh1).toBeInTheDocument();
    });

    test("Then it should render a button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <HeaderComponent />
          </Provider>
        </BrowserRouter>
      );

      const expectedButton = screen.getByRole("button");

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
