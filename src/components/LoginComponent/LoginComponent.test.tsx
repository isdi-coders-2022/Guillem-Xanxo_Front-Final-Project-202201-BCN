import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import LoginComponent from "./LoginComponent";

const mockUseDispatch = jest.fn();
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

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

      expect(text).toHaveLength(1);
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

  describe("When it is filled with the required fields and the button Entra appears", () => {
    test("Then it should dispatch the submit button when clicked", () => {
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
      userEvent.click(button);

      expect(mockUseDispatch).toHaveBeenCalled();
    });
  });

  describe("When it is rendered and it renders the button Enrere", () => {
    test("Then if clicked it should navigate to another url", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginComponent />
          </Provider>
        </BrowserRouter>
      );

      const expectedButton = screen.getByRole("button", { name: "Enrere" });
      userEvent.click(expectedButton);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
