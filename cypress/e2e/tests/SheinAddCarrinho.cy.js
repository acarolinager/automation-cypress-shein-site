/// <reference types="Cypress"/>

import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";


describe("Shein Add Cart", () => {

  const home = new HomePage();
  const product = new ProductPage();
  const cart = new CartPage();

  beforeEach(() => {
    cy.visit("https://br.shein.com/");

    cy.viewport(Cypress.env("desktop"));
    
  });

  it("[Desktop] Verify page structure", () => {
    cy.viewport(Cypress.env("desktop"));
    
  });

});