import { Trip } from "../../interfaces/Trip";
import tripsReducer from "./tripsReducer";

describe("Given a tripsReducer function", () => {
  describe("When it is called with a deleteThisTripAction action", () => {
    test("Then it should return an array of trips without the trip with id passed as argument", () => {
      const currentTrips: Trip[] = [
        {
          origen: "Barcelona",
          desti: "Sort",
          places: "3",
          horaSortida: "18",
          comentaris: "S'accepten animals",
          dones: "false",
          data: "2018-02-12 19:23:45",
          id: "1",
        },
        {
          origen: "Barcelona",
          desti: "Sort",
          places: "3",
          horaSortida: "18",
          comentaris: "S'accepten animals",
          dones: "false",
          data: "2018-02-12 19:23:45",
          id: "2",
        },
      ];
      const action = {
        type: "delete-this-trip",
        id: "1",
      };
      const expectedTripArray: Trip[] = [
        {
          origen: "Barcelona",
          desti: "Sort",
          places: "3",
          horaSortida: "18",
          comentaris: "S'accepten animals",
          dones: "false",
          data: "2018-02-12 19:23:45",
          id: "2",
        },
      ];

      const newState = tripsReducer(currentTrips, action);

      expect(newState).toEqual(expectedTripArray);
    });
  });

  describe("When it is called with a createThisTripAction action", () => {
    test("Then it should return an array of trips with the trip passed as argument", () => {
      const currentTrips: Trip[] = [];
      const newTrip = {
        origen: "Barcelona",
        desti: "Sort",
        places: "3",
        horaSortida: "18",
        comentaris: "S'accepten animals",
        dones: "false",
        data: "2018-02-12 19:23:45",
        id: "1",
      };

      const action = {
        type: "create-trip",
        newTrip: newTrip,
      };
      const expectedTripArray: Trip[] = [
        {
          origen: "Barcelona",
          desti: "Sort",
          places: "3",
          horaSortida: "18",
          comentaris: "S'accepten animals",
          dones: "false",
          data: "2018-02-12 19:23:45",
          id: "1",
        },
      ];

      const newState = tripsReducer(currentTrips, action);

      expect(newState).toEqual(expectedTripArray);
    });
  });
});
