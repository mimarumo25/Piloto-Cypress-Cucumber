import datos from "../../fixtures/example.json"
import { BTN_Login, INPUT_PASSWORD, INPUT_USER } from "../userinterfaces/LoginPage"

export const IngresarCredencias = () => {
  cy.get(INPUT_USER).type(datos.user);
  cy.get(INPUT_PASSWORD).type(datos.password);
  cy.get(BTN_Login).click()
}