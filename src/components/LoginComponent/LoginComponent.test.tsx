import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import LoginComponent from "./LoginComponent";

const mockUseDispatch = jest.fn();

jest.mock("react-redux", () => {
  return {
    ...jest.requireActual("react-redux"),
    useDispatch: () => mockUseDispatch,
  };
});

describe("Given a Login component", () => {
  describe("When it is rendered", () => {
    test("Then it should display 2 text boxes", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginComponent />
          </Provider>
        </BrowserRouter>
      );

      const text = screen.getAllByRole("textbox");

      expect(text).toHaveLength(2);
    });
  });

  describe("When it is filled with the required fields", () => {
    test("Then it should display the submit button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginComponent />
          </Provider>
        </BrowserRouter>
      );
      userEvent.type(screen.getByLabelText("Usuari:"), "Luis");
      userEvent.type(screen.getByLabelText("Contrassenya:"), "122112");

      const button = screen.getByRole("button", { name: /Entra/i });

      expect(button).toBeInTheDocument();
    });
  });
});
