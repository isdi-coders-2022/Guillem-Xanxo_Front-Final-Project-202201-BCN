import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import { TripCardComponent } from "./TripCardComponent";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

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
            <TripCardComponent trip={trip} visibility="" />
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
            <TripCardComponent trip={trip} visibility="" />
          </Provider>
        </BrowserRouter>
      );

      const dones = screen.getByText(
        "Aquest viatge és exclusiu per a passetgeres"
      );

      expect(dones).toBeInTheDocument();
    });
  });

  describe("When the Més info sessio button is clicked", () => {
    test("Then it should invoke a function", () => {
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
            <TripCardComponent trip={trip} visibility="" />
          </Provider>
        </BrowserRouter>
      );

      const mesinfoButton = screen.getByRole("button", { name: "Més info" });
      userEvent.click(mesinfoButton);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  describe("When there is a visibility = 'user'", () => {
    test.only("Then it should display a button Esborra", () => {
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
            <TripCardComponent trip={trip} visibility="user" />
          </Provider>
        </BrowserRouter>
      );

      const esborraButton = screen.getByRole("button", { name: "Esborra" });

      expect(esborraButton).toBeInTheDocument();
    });
  });
});
