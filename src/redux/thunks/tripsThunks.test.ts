import {
  createTripThunk,
  deleteTripThunk,
  getAllTripsThunk,
} from "./tripsThunks";

describe("Given a getAllTripsThunk function", () => {
  describe("When it is called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();

      await getAllTripsThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a deleteTripThunk function", () => {
  describe("When it's called with a trip id", () => {
    test("Then it should call the dispatch with an action", async () => {
      const dispatch = jest.fn();
      const action = {
        type: "delete-this-trip",
        id: "2",
      };

      const deletedTrip = deleteTripThunk(action.id);
      await deletedTrip(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given an createTripThunk function", () => {
  describe("When it is called with a new Trip", () => {
    test("Then it should dispatch a function", async () => {
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
      const dispatch = jest.fn();

      const innerThunk = await createTripThunk(newTrip);
      await innerThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
