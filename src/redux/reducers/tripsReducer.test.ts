import { Trip } from "../../interfaces/Trip";
import actionTypes from "../actions/actionTypes";
import tripsReducer from "./tripsReducer";

describe("Given a tripsReducer function", () => {
  describe("When it's called with a getAllTrips action with an array of trips", () => {
    test("Then it should return a new state with the array of trips", () => {
      const currentTrips: Trip[] = [];
      const tripsToGet: Trip[] = [
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
        {
          origen: "Barcelona",
          desti: "Sort",
          places: 3,
          horaSortida: 18,
          comentaris: "S'accepten animals",
          dones: false,
          data: "2018-02-12 19:23:45",
          id: "2",
        },
      ];

      const action = {
        type: actionTypes.getAllTrips,
        trips: tripsToGet,
      };

      const newState = tripsReducer(currentTrips, action);

      expect(newState).toEqual(tripsToGet);
    });
  });
});
