// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("App", function () {
  beforeEach(function () {
    cy.visit("usuari/login");
  });

  it("renders the app should find a div with Usuari", function () {
    cy.get("label").should("contain", "Usuari");
  });

  it("should find the 1st input and type maria", function () {
    cy.get("input").first().type("maria").should("have.value", "maria");
    cy.get("input").last().type("maria").should("have.value", "maria");
  });

  it("should find the button Entra and click", function () {
    cy.get("button").should("contain", "Entra").click;
  });
});

export {};
