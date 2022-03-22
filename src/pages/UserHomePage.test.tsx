import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import UserHomePage from "./UserHomePage";

describe("Given an UserHomePage page", () => {
  describe("When it's rendered", () => {
    test("Then it should render a button called Cerca viatge", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <UserHomePage />
          </Provider>
        </BrowserRouter>
      );

      const cercaViatge = screen.getByRole("button", { name: "Cerca viatge" });

      expect(cercaViatge).toBeInTheDocument();
    });
  });
});
