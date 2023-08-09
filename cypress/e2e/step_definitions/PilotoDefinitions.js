
import { ambiente } from "../tasks/AbrirPage";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { IngresarCredencias } from "../tasks/IngresarCredenciales";
import { validarLogin } from "../questions/LoginQuestions";

Given("como usuario quiero abrir la web color lib", () => {
  ambiente();
})
When("digitar usuario y password", () => {
  IngresarCredencias();
})
Then("el usuario podra ver en pantalla el dashboard", () => {
  validarLogin()

})