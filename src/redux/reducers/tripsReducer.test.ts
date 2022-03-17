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
        type: actionTypes.getAllTrips,
        trips: tripsToGet,
      };

      const newState = tripsReducer(currentTrips, action);

      expect(newState).toEqual(tripsToGet);
    });
  });

  describe("When it is called with an action that does not exist", () => {
    test("Then it should return the current trips array, default in switch", () => {
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
      ];
      const action = {
        type: "none",
        trips: currentTrips,
      };

      const newTripArray = tripsReducer(currentTrips, action);

      expect(newTripArray).toEqual(currentTrips);
    });
  });

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
    test.only("Then it should return an array of trips with the trip passed as argument", () => {
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
