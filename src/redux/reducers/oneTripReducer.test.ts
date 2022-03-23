import { TripReceived } from "../../interfaces/TripReceived";
import actionTypes from "../actions/actionTypes";
import OneTripReducer from "./OneTripReducer";

describe("Given a OneTripReducer function", () => {
  describe("When it's called with a getThisTrip action with an object like TripReceived", () => {
    test("Then it should return a new state with the trip received", () => {
      const currentTrip: TripReceived = {
        origen: "",
        desti: "",
        places: "",
        data: "",
        dataNumber: 0,
        horaSortida: "",
        horaSortidaNumber: 0,
        comentaris: "",
        dones: false,
        id: "",
      };
      const tripToGet: TripReceived = {
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
      };

      const action = {
        type: actionTypes.getThisTrip,
        trip: tripToGet,
      };

      const newState = OneTripReducer(currentTrip, action);

      expect(newState).toEqual(tripToGet);
    });
  });

  describe("When it's called with a getThisTrip action with an action that does not exist", () => {
    test("Then it should return a new state as the initial empty state", () => {
      const currentTrip: TripReceived = {
        origen: "",
        desti: "",
        places: "",
        data: "",
        dataNumber: 0,
        horaSortida: "",
        horaSortidaNumber: 0,
        comentaris: "",
        dones: false,
        id: "",
      };
      const tripToGet: TripReceived = {
        origen: "",
        desti: "",
        places: "",
        data: "",
        dataNumber: 0,
        horaSortida: "",
        horaSortidaNumber: 0,
        comentaris: "",
        dones: false,
        id: "",
      };

      const action = {
        type: "",
        trip: tripToGet,
      };

      const newState = OneTripReducer(currentTrip, action);

      expect(newState).toEqual(currentTrip);
    });
  });
});
