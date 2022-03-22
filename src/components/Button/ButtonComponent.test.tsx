import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe("Given a Button component", () => {
  describe("When it receives an action and a button is clicked", () => {
    test("Then it should call the action", () => {
      const action = jest.fn();

      render(
        <Button
          actionOnClick={action}
          text="text"
          nature="usuari"
          className="button"
        />
      );

      userEvent.click(screen.getByRole("button"));

      expect(action).toHaveBeenCalled();
    });
  });

  describe("When it receives an action and a button with type delete is clicked", () => {
    test("Then it should call the action", () => {
      const action = jest.fn();

      render(
        <Button
          actionOnClick={action}
          text="text"
          nature="delete"
          className="button"
        />
      );

      userEvent.click(screen.getByRole("button"));

      expect(action).toHaveBeenCalled();
    });
  });

  describe("When it receives an action and a button with type crear-viatge is clicked", () => {
    test("Then it should call the action", () => {
      const action = jest.fn();

      render(
        <Button
          actionOnClick={action}
          text="text"
          nature="crear-viatge"
          className="button"
        />
      );

      userEvent.click(screen.getByRole("button"));

      expect(action).toHaveBeenCalled();
    });
  });

  describe("When it receives an action and a button with type home is clicked", () => {
    test("Then it should call the action", () => {
      const action = jest.fn();

      render(
        <Button
          actionOnClick={action}
          text="text"
          nature="home"
          className="button"
        />
      );

      userEvent.click(screen.getByRole("button"));

      expect(action).toHaveBeenCalled();
    });
  });

  describe("When it receives an action and a button with type cerca-viatge is clicked", () => {
    test("Then it should call the action", () => {
      const action = jest.fn();

      render(
        <Button
          actionOnClick={action}
          text="text"
          nature="cerca-viatge"
          className="button"
        />
      );

      userEvent.click(screen.getByRole("button"));

      expect(action).toHaveBeenCalled();
    });
  });

  describe("When it receives an action and a button with type detall is clicked", () => {
    test("Then it should call the action", () => {
      const action = jest.fn();

      render(
        <Button
          actionOnClick={action}
          text="text"
          nature="detall"
          className="button"
        />
      );

      userEvent.click(screen.getByRole("button"));

      expect(action).toHaveBeenCalled();
    });
  });

  describe("When it receives an action and a button with type enrere-crono is clicked", () => {
    test("Then it should call the action", () => {
      const action = jest.fn();

      render(
        <Button
          actionOnClick={action}
          text="text"
          nature="enrere-crono"
          className="button"
        />
      );

      userEvent.click(screen.getByRole("button"));

      expect(action).toHaveBeenCalled();
    });
  });

  describe("When it receives an action and a button with type tanca-sessio is clicked", () => {
    test("Then it should call the action", () => {
      const action = jest.fn();

      render(
        <Button
          actionOnClick={action}
          text="text"
          nature="tanca-sessio"
          className="button"
        />
      );

      userEvent.click(screen.getByRole("button"));

      expect(action).toHaveBeenCalled();
    });
  });
});
