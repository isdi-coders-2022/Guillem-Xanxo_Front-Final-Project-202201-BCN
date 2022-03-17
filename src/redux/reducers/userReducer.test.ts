import userReducer from "./userReducer";

describe("Given a userReducer", () => {
  describe("When it receives a user with usuari, contrassenya", () => {
    test("Then it should return the user", () => {
      const user = { usuari: "", contrassenya: "" };
      const expectedUser = {
        usuari: "conchi",
        contrassenya: "123123",
      };
      const action = {
        type: "user-login",
        user: expectedUser,
      };

      const newUser = userReducer(user, action);

      expect(newUser).toEqual(expectedUser);
    });
  });
});
