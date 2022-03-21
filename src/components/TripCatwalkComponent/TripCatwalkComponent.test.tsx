import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { TripReceived } from "../../interfaces/TripReceived";
import { store } from "../../redux/store";
import TripCatwalkComponent from "./TripCatwalkComponent";

describe("Given a TripCatwalkComponent component", () => {
  describe("When it is rendered with an array of trips", () => {
    test("Then it should render the origin of all of the trips in the array", () => {
      const tripsArray: TripReceived[] = [
        {
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
        },
      ];
      const expectedText = "Origen:";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <TripCatwalkComponent trips={tripsArray} visibility="" />
          </Provider>
        </BrowserRouter>
      );

      const origin = screen.getByText("Origen:");

      expect(origin.textContent).toBe(expectedText);
    });
  });
});
