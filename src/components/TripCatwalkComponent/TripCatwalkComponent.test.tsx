import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Trip } from "../../interfaces/Trip";
import TripCatwalkComponent from "./TripCatwalkComponent";

describe("Given a TripCatwalkComponent component", () => {
  describe("When it is rendered with an array of trips", () => {
    test("Then it should render the origin of all of the trips in the array", () => {
      const tripsArray: Trip[] = [
        {
          origen: "Barcelona",
          desti: "Sort",
          places: 3,
          horaSortida: 18,
          comentaris: "S'accepten animals",
          dones: false,
          data: "2018-02-12 19:23:45",
          id: "1",
        },
      ];
      const expectedText = "Origen:";

      render(
        <BrowserRouter>
          <TripCatwalkComponent trips={tripsArray} />
        </BrowserRouter>
      );

      const origin = screen.getByText("Origen:");

      expect(origin.textContent).toBe(expectedText);
    });
  });
});
