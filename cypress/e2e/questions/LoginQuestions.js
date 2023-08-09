import datos from "../../fixtures/example.json"
import { LBL_PRODUCTS } from "../userinterfaces/LoginPage";
export const validarLogin = () => {
  const mensaje = cy.xpath(LBL_PRODUCTS);
  console.log({ mensaje });
  mensaje.should('be.visible').and('have.text', datos.prodcuto)
}