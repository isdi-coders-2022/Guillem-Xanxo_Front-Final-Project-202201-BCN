import { loginThunk } from "./userThunks";

describe("Given an loginThunk function", () => {
  describe("When it is called with a usuari and contrassenya", () => {
    test("Then it should dispatch a function", async () => {
      const newUser = {
        usuari: "gxanxo",
        contrassenya: "guillemito",
      };
      const dispatch = jest.fn();

      const innerThunk = await loginThunk(newUser);
      await innerThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
