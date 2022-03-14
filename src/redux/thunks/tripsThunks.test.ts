import { deleteTripThunk, getAllTripsThunk } from "./tripsThunks";

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
