import { render, screen } from "@testing-library/react";
import ButtonNoAction from "./ButtonNoAction";

describe("Given a ButtonNoAction component", () => {
  describe("When it receives the text 'Crea Viatge", () => {
    test("Then it should display the text", () => {
      render(
        <ButtonNoAction text="Crea Viatge" type="submit" className="button" />
      );

      const wantedButton = screen.getByText(/Crea viatge/i);

      expect(wantedButton).toBeInTheDocument();
    });
  });
});
