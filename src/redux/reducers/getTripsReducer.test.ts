import { TripReceived } from "../../interfaces/TripReceived";
import actionTypes from "../actions/actionTypes";
import getTripsReducer from "./getTripsReducer";

describe("Given a tripsReducer function", () => {
  describe("When it's called with a getAllTrips action with an array of trips", () => {
    test("Then it should return a new state with the array of trips", () => {
      const currentTrips: TripReceived[] = [];
      const tripsToGet: TripReceived[] = [
        {
          origen: "Barcelona",
          desti: "Sort",
          places: "3",
          horaSortida: "18",
          horaSortidaNumber: 18,
          comentaris: "S'accepten animals",
          dones: false,
          data: "2018-02-12",
          dataNumber: 20180212,
          id: "1",
        },
        {
          origen: "Barcelona",
          desti: "Sort",
          places: "3",
          horaSortida: "18",
          horaSortidaNumber: 18,
          comentaris: "S'accepten animals",
          dones: false,
          data: "2018-02-12",
          dataNumber: 20180212,
          id: "2",
        },
      ];

      const action = {
        type: actionTypes.getAllTrips,
        trips: tripsToGet,
      };

      const newState = getTripsReducer(currentTrips, action);

      expect(newState).toEqual(tripsToGet);
    });
  });

  describe("When it is called with an action that does not exist", () => {
    test("Then it should return the current trips array, default in switch", () => {
      const currentTrips: TripReceived[] = [
        {
          origen: "Barcelona",
          desti: "Sort",
          places: "3",
          horaSortida: "18",
          horaSortidaNumber: 18,
          comentaris: "S'accepten animals",
          dones: false,
          data: "2018-02-12",
          dataNumber: 20180212,
          id: "2",
        },
      ];
      const action = {
        type: "none",
        trips: currentTrips,
      };

      const newTripArray = getTripsReducer(currentTrips, action);

      expect(newTripArray).toEqual(currentTrips);
    });
  });

  describe("When it is called with a deleteThisTripAction action", () => {
    test("Then it should return an array of trips without the trip with id passed as argument", () => {
      const currentTrips: TripReceived[] = [
        {
          origen: "Barcelona",
          desti: "Sort",
          places: "3",
          horaSortida: "18",
          horaSortidaNumber: 18,
          comentaris: "S'accepten animals",
          dones: false,
          data: "2018-02-12",
          dataNumber: 20180212,
          id: "1",
        },
        {
          origen: "Barcelona",
          desti: "Sort",
          places: "3",
          horaSortida: "18",
          horaSortidaNumber: 18,
          comentaris: "S'accepten animals",
          dones: false,
          data: "2018-02-12",
          dataNumber: 20180212,
          id: "2",
        },
      ];
      const action = {
        type: "delete-this-trip",
        id: "1",
      };
      const expectedTripArray: TripReceived[] = [
        {
          origen: "Barcelona",
          desti: "Sort",
          places: "3",
          horaSortida: "18",
          horaSortidaNumber: 18,
          comentaris: "S'accepten animals",
          dones: false,
          data: "2018-02-12",
          dataNumber: 20180212,
          id: "2",
        },
      ];

      const newState = getTripsReducer(currentTrips, action);

      expect(newState).toEqual(expectedTripArray);
    });
  });

  describe("When it's called with a getUserTrips action with an array of trips", () => {
    test("Then it should return a new state with the array of trips", () => {
      const currentTrips: TripReceived[] = [];
      const tripsToGet: TripReceived[] = [
        {
          origen: "Barcelona",
          desti: "Sort",
          places: "3",
          horaSortida: "18",
          horaSortidaNumber: 18,
          comentaris: "S'accepten animals",
          dones: false,
          data: "2018-02-12",
          dataNumber: 20180212,
          id: "1",
        },
        {
          origen: "Barcelona",
          desti: "Sort",
          places: "3",
          horaSortida: "18",
          horaSortidaNumber: 18,
          comentaris: "S'accepten animals",
          dones: false,
          data: "2018-02-12",
          dataNumber: 20180212,
          id: "2",
        },
      ];

      const action = {
        type: actionTypes.getUserTrips,
        trips: tripsToGet,
      };

      const newState = getTripsReducer(currentTrips, action);

      expect(newState).toEqual(tripsToGet);
    });
  });
});
