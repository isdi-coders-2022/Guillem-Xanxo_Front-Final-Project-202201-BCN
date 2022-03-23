import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import CreateFormComponent from "./CreateFormComponent";

const mockUseDispatch = jest.fn();

jest.mock("react-redux", () => {
  return {
    ...jest.requireActual("react-redux"),
    useDispatch: () => mockUseDispatch,
  };
});

describe("Given a CreateForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should display 3 text boxes", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateFormComponent />
          </Provider>
        </BrowserRouter>
      );

      const text = screen.getAllByRole("textbox");

      expect(text).toHaveLength(3);
    });

    test("Then it should display a checkbox", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateFormComponent />
          </Provider>
        </BrowserRouter>
      );

      const dones = screen.getByRole("checkbox");

      expect(dones).toBeInTheDocument();
    });
  });

  describe("When it is filled with the required fields", () => {
    test("Then it should display the submit button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateFormComponent />
          </Provider>
        </BrowserRouter>
      );
      userEvent.type(screen.getByLabelText("Origen:"), "Barcelona");
      userEvent.type(screen.getByLabelText("Destí:"), "Sort");
      userEvent.type(screen.getByLabelText("Places:"), "4");
      userEvent.type(screen.getByLabelText("Data:"), "2018-02-12");
      userEvent.type(screen.getByLabelText("Hora de sortida:"), "18:00");

      const button = screen.getByRole("button", { name: /Crea viatge/i });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it is filled with the required fields and then the button to  submit appears", () => {
    test("Then when the button is clicked it dispatches the action submit", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateFormComponent />
          </Provider>
        </BrowserRouter>
      );
      userEvent.type(screen.getByLabelText("Origen:"), "Barcelona");
      userEvent.type(screen.getByLabelText("Destí:"), "Sort");
      userEvent.type(screen.getByLabelText("Places:"), "4");
      userEvent.type(screen.getByLabelText("Data:"), "2018-02-12");
      userEvent.type(screen.getByLabelText("Hora de sortida:"), "18:00");
      const button = screen.getByRole("button", { name: /Crea viatge/i });

      userEvent.click(button);

      expect(mockUseDispatch).toHaveBeenCalled();
    });
  });
});
