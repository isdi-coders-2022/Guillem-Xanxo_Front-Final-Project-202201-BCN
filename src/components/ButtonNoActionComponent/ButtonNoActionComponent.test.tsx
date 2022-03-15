import { render, screen } from "@testing-library/react";
import ButtonNoAction from "./ButtonNoActionComponent";

describe("Given a ButtonNoAction component", () => {
  describe("When it receives the text 'Crea Viatge", () => {
    test("Then it should display the text", () => {
      render(
        <ButtonNoAction text="Crea Viatge" type="usuari" className="button" />
      );

      const wantedButton = screen.getByRole("button", { name: /Crea viatge/i });

      expect(wantedButton).toBeInTheDocument();
    });
  });
});
