import {
  createThisTripAction,
  deleteThisTripAction,
  getAllTripsAction,
  getThisTripAction,
  getUserTripsAction,
  userLoginAction,
  userRegisterAction,
} from "./actionCreators";
import { TripReceived } from "../../interfaces/TripReceived";

describe("Given a getAllTripsAction action", () => {
  describe("When it receives an array with trips", () => {
    test("Then it should return an action object with type 'get-all-trips'", () => {
      const trips: TripReceived[] = [
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

      const expectedAction = {
        type: "get-all-trips",
        trips,
      };

      const action = getAllTripsAction(trips);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a getUserTripsAction action", () => {
  describe("When it receives an array with trips", () => {
    test("Then it should return an action object with type 'get-user-trips'", () => {
      const trips: TripReceived[] = [
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

      const expectedAction = {
        type: "get-user-trips",
        trips,
      };

      const action = getUserTripsAction(trips);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a getThisTripAction action", () => {
  describe("When it receives an object like TripReceived", () => {
    test("Then it should return an action object with type 'get-this-trip'", () => {
      const trip: TripReceived = {
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

      const expectedAction = {
        type: "get-this-trip",
        trip,
      };

      const action = getThisTripAction(trip);

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
        places: "3",
        horaSortida: "18",
        comentaris: "S'accepten animals",
        dones: "false",
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

describe("Given a userLoginAction action", () => {
  describe("When it receives an object with properties usuari and contrassenya", () => {
    test("Then it should return an action with type 'user-login' and the array as a property", () => {
      const loggedUser = {
        usuari: "Barcelona",
        contrassenya: "Sort",
      };

      const expectedAction = {
        type: "user-login",
        user: loggedUser,
      };

      const action = userLoginAction(loggedUser);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a userRegisterAction action", () => {
  describe("When it receives an object like Usuari", () => {
    test("Then it should return an action with type 'user-register' and the object as a property", () => {
      const registerUser = {
        usuari: "Barcelona",
        nom: "Martí",
        contrassenya: "Sort",
        telefon: "611111111",
      };

      const expectedAction = {
        type: "user-register",
        user: registerUser,
      };

      const action = userRegisterAction(registerUser);

      expect(action).toEqual(expectedAction);
    });
  });
});
