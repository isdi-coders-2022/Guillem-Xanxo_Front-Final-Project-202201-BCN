import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import UserRegisterPage from "./UserRegisterPage";

describe("Given an UserRegisterPage page", () => {
  describe("When it's rendered", () => {
    test("Then it should render a 3 textboxes", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <UserRegisterPage />
          </Provider>
        </BrowserRouter>
      );

      const textbox = screen.getAllByRole("textbox");

      expect(textbox).toHaveLength(3);
    });
  });
});
