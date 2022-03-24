import userReducer from "./userReducer";

describe("Given a userReducer", () => {
  describe("When it receives a user with usuari, contrassenya", () => {
    test("Then it should return the user", () => {
      const user = { usuari: "", contrassenya: "" };
      const expectedUser = {
        usuari: "conchi",
        contrassenya: "",
      };
      const action = {
        type: "user-login",
        user: expectedUser,
      };

      const newUser = userReducer(user, action);

      expect(newUser).toEqual(expectedUser);
    });
  });

  describe("When it receives a user like User", () => {
    test("Then it should return the user", () => {
      const user = { usuari: "", contrassenya: "", nom: "", telefon: "" };
      const registeredUser = { usuari: "", contrassenya: "" };
      const User = {
        usuari: "conchi",
        contrassenya: "123123",
        nom: "Conchi",
        telefon: "611111111",
      };
      const action = {
        type: "user-register",
        user: User,
      };

      const newUser = userReducer(user, action);

      expect(newUser).toEqual(registeredUser);
    });
  });
});
