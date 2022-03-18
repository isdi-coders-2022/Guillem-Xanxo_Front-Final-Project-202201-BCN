import { render, screen } from "@testing-library/react";
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
        places: "3",
        horaSortida: "18",
        comentaris: "S'accepten animals",
        dones: false,
        data: "2018-02-12 19:23:45",
        id: "1",
        horaSortidaNumber: 1000,
        dataNumber: 20220917,
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

  describe("When it renders a trip with property 'dones' as true", () => {
    test("Then it should display a the text: Aquest viatge és exclusiu per a passetgeres", async () => {
      const trip = {
        origen: "Barcelona",
        desti: "Sort",
        places: "3",
        horaSortida: "18",
        comentaris: "S'accepten animals",
        dones: true,
        data: "2018-02-12 19:23:45",
        id: "1",
        horaSortidaNumber: 1000,
        dataNumber: 20220917,
      };

      render(
        <BrowserRouter>
          <Provider store={store}>
            <TripCardComponent trip={trip} />
          </Provider>
        </BrowserRouter>
      );

      const dones = screen.getByText(
        "Aquest viatge és exclusiu per a passetgeres"
      );

      expect(dones).toBeInTheDocument();
    });
  });
});
