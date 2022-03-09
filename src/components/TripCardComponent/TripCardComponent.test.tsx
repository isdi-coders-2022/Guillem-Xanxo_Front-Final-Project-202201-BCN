import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { TripCard } from "./TripCardComponent";

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
          <TripCard trip={trip} />
        </BrowserRouter>
      );

      const tripOrigen = screen.getByText("Barcelona");

      expect(tripOrigen).toBeInTheDocument();
    });
  });
});
