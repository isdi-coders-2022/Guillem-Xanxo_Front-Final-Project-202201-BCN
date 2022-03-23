import { render, screen } from "@testing-library/react";
import HeaderComponent from "./HeaderComponent";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import userEvent from "@testing-library/user-event";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should render a heading", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <HeaderComponent />
          </Provider>
        </BrowserRouter>
      );

      const expectedh1 = screen.getByRole("heading");

      expect(expectedh1).toBeInTheDocument();
    });

    test("Then it should render a button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <HeaderComponent />
          </Provider>
        </BrowserRouter>
      );

      const expectedButton = screen.getByRole("button");

      expect(expectedButton).toBeInTheDocument();
    });
  });

  describe("When it is rendered and it renders the button Login", () => {
    test("Then if clicked it should navigate to another url", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <HeaderComponent />
          </Provider>
        </BrowserRouter>
      );

      const expectedButton = screen.getByRole("button");
      userEvent.click(expectedButton);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  describe("When it is rendered and it renders the button Home", () => {
    test("Then if clicked it should navigate to another url", () => {
      const mockStore = configureMockStore([thunk]);
      const storeMock = mockStore({
        user: { loggedIn: true },
      });

      render(
        <BrowserRouter>
          <Provider store={storeMock}>
            <HeaderComponent />
          </Provider>
        </BrowserRouter>
      );

      const expectedButton = screen.getByRole("button");
      userEvent.click(expectedButton);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
