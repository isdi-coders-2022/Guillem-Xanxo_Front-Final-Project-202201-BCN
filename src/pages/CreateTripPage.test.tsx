import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import CreateTripPage from "./CreateTripPage";

describe("Given an UserLoginPage page", () => {
  describe("When it's rendered", () => {
    test("Then it should render 3 textboxes", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateTripPage />
          </Provider>
        </BrowserRouter>
      );

      const textbox = screen.getAllByRole("textbox");

      expect(textbox).toHaveLength(3);
    });
  });
});
