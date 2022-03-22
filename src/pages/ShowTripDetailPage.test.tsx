import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import ShowTripDetailPage from "./ShowTripDetailPage";

describe("Given an ShowTripDetailPage page", () => {
  describe("When it's rendered", () => {
    test("Then it should render a heading with text Transporta't Pallars", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ShowTripDetailPage />
          </Provider>
        </BrowserRouter>
      );

      const heading = screen.getByRole("heading", {
        name: "Transporta't Pallars",
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
