import {
  createThisTripAction,
  deleteThisTripAction,
  getAllTripsAction,
} from "./actionCreators";
import { Trip } from "../../interfaces/Trip";

describe("Given a getAllTripsAction action", () => {
  describe("When it receives an array with trips", () => {
    test("Then it should return an action object with type 'get-all-trips'", () => {
      const trips: Trip[] = [
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

      const expectedAction = {
        type: "get-all-trips",
        trips,
      };

      const action = getAllTripsAction(trips);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a deleteThisTripAction action", () => {
  describe("When it receives an id", () => {
    test("Then it should return an action with type 'delete-this-trip' and the trip id as another property", () => {
      const TripIdToDelete = "1";

      const expectedAction = {
        type: "delete-this-trip",
        id: TripIdToDelete,
      };

      const action = deleteThisTripAction(TripIdToDelete);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a createThisTripAction action", () => {
  describe("When it receives an object like Trip", () => {
    test("Then it should return an action with type 'create-trip' and the new trip as another property", () => {
      const newTrip = {
        origen: "Barcelona",
        desti: "Sort",
        places: 3,
        horaSortida: 18,
        comentaris: "S'accepten animals",
        dones: false,
        data: "2018-02-12 19:23:45",
        id: "2",
      };

      const expectedAction = {
        type: "create-trip",
        newTrip: newTrip,
      };

      const action = createThisTripAction(newTrip);

      expect(action).toEqual(expectedAction);
    });
  });
});
