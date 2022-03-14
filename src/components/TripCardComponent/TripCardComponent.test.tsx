import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import { TripCardComponent } from "./TripCardComponent";

describe("Given a TripCardComponent component", () => {
  describe("When it receives a Trip", () => {
    test("Then it should display the origin of the trip", () => {
      const trip = {
        origen: "Barcelona",
        desti: "Sort",
        places: 3,
        horaSortida: 18,
        comentaris: "S'accepten animals",
        dones: false,
        data: "2018-02-12 19:23:45",
        id: "1",
      };

      render(
        <BrowserRouter>
          <Provider store={store}>
            <TripCardComponent trip={trip} />
          </Provider>
        </BrowserRouter>
      );

      const tripOrigen = screen.getByText("Barcelona");

      expect(tripOrigen).toBeInTheDocument();
    });
  });

  describe("When it renders a trip card", () => {
    test("Then it should display a button that call an action when clicked", async () => {
      const trip = {
        origen: "Barcelona",
        desti: "Sort",
        places: 3,
        horaSortida: 18,
        comentaris: "S'accepten animals",
        dones: false,
        data: "2018-02-12 19:23:45",
        id: "1",
      };
      const action = jest.fn();

      render(
        <BrowserRouter>
          <Provider store={store}>
            <TripCardComponent trip={trip} />
          </Provider>
        </BrowserRouter>
      );
      const buttonToClick = await screen.findByRole("button");

      await userEvent.click(buttonToClick);

      expect(action).toHaveBeenCalled();
    });
  });
});
