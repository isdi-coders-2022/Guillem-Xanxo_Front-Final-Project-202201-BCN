import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import UserHomePage from "./UserHomePage";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given an UserHomePage page", () => {
  describe("When it's rendered", () => {
    test("Then it should render a button called Cerca viatge", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <UserHomePage />
          </Provider>
        </BrowserRouter>
      );

      const cercaViatge = screen.getByRole("button", { name: "Cerca viatge" });

      expect(cercaViatge).toBeInTheDocument();
    });
  });

  describe("When the Crear viatge button is clicked", () => {
    test("Then it should invoke a function", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <UserHomePage />
          </Provider>
        </BrowserRouter>
      );

      const crearButton = screen.getByRole("button", { name: "Crear viatge" });
      userEvent.click(crearButton);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  describe("When the Cerca viatge button is clicked", () => {
    test("Then it should invoke a function", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <UserHomePage />
          </Provider>
        </BrowserRouter>
      );

      const cercaButton = screen.getByRole("button", { name: "Cerca viatge" });
      userEvent.click(cercaButton);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  describe("When the Tanca sessio button is clicked", () => {
    test("Then it should invoke a function", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <UserHomePage />
          </Provider>
        </BrowserRouter>
      );

      const tancaButton = screen.getByRole("button", { name: "Tanca sessió" });
      userEvent.click(tancaButton);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
