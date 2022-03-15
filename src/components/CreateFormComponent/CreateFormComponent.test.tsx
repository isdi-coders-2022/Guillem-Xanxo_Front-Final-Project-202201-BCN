import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
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
        <Provider store={store}>
          <CreateFormComponent />
        </Provider>
      );

      const text = screen.getAllByRole("textbox");

      expect(text).toHaveLength(3);
    });
  });

  describe("When it is clicked on the rendered button", () => {
    test("Then it should call the dispatch function", () => {
      render(
        <Provider store={store}>
          <CreateFormComponent />
        </Provider>
      );

      const button = screen.getByRole("button", { name: /Crea viatge/i });

      userEvent.click(button);

      expect(mockUseDispatch).toHaveBeenCalled();
    });
  });
});
