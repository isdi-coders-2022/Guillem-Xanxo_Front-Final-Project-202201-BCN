import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import UserLoginPage from "./UserLoginPage";

describe("Given an UserLoginPage page", () => {
  describe("When it's rendered", () => {
    test("Then it should render a textbox", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <UserLoginPage />
          </Provider>
        </BrowserRouter>
      );

      const textbox = screen.getAllByRole("textbox");

      expect(textbox).toHaveLength(1);
    });
  });
});
