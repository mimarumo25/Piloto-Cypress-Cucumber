/*class AbrirPage{
  pagina = {
    ambiete: ()=>cy.visit('/'),
    pantalla: ()=> cy.viewport(1280,800)
  }
  url(){
    this.pagina.ambiete();
    this.pagina.pantalla();
  }
}
module.exports = new AbrirPage();*/

export const ambiente = () => {
  cy.visit('/');
}

// pantalla.js
export const pantalla = () => {
  cy.viewport(1280, 800);
}