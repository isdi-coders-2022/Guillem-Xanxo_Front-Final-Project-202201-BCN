import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import RegisterFormComponent from "./RegisterFormComponent";

const mockUseDispatch = jest.fn();
jest.mock("react-redux", () => {
  return {
    ...jest.requireActual("react-redux"),
    useDispatch: () => mockUseDispatch,
  };
});

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a Register component", () => {
  describe("When it is rendered", () => {
    test("Then it should display 3 text boxes", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterFormComponent />
          </Provider>
        </BrowserRouter>
      );

      const text = screen.getAllByRole("textbox");

      expect(text).toHaveLength(3);
    });
  });

  describe("When it is filled with the required fields", () => {
    test("Then it should display the submit button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterFormComponent />
          </Provider>
        </BrowserRouter>
      );
      userEvent.type(screen.getByLabelText("Usuari:"), "Luis");
      userEvent.type(screen.getByLabelText("Contrassenya:"), "122112");
      userEvent.type(
        screen.getByLabelText("Telèfon: (públic quan es mostren els viatges)"),
        "611111111"
      );
      userEvent.type(
        screen.getByLabelText("Nom: (públic quan es mostren els viatges)"),
        "Luis"
      );

      const button = screen.getByRole("button", { name: /Registra't/i });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it is filled with the required fields and the button appears", () => {
    test("Then it should dispatch the submit button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterFormComponent />
          </Provider>
        </BrowserRouter>
      );
      userEvent.type(screen.getByLabelText("Usuari:"), "Luis");
      userEvent.type(screen.getByLabelText("Contrassenya:"), "122112");
      userEvent.type(
        screen.getByLabelText("Telèfon: (públic quan es mostren els viatges)"),
        "611111111"
      );
      userEvent.type(
        screen.getByLabelText("Nom: (públic quan es mostren els viatges)"),
        "Luis"
      );

      const button = screen.getByRole("button", { name: /Registra't/i });
      userEvent.click(button);

      expect(mockUseDispatch).toHaveBeenCalled();
    });
  });

  describe("When it is rendered and it renders the button Enrere", () => {
    test("Then if clicked it should navigate to another url", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterFormComponent />
          </Provider>
        </BrowserRouter>
      );

      const expectedButton = screen.getByRole("button", { name: "Enrere" });
      userEvent.click(expectedButton);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
