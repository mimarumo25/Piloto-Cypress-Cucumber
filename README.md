# Descripción del Proyecto

Este proyecto contiene pruebas automatizadas utilizando Cypress y Cucumber para probar la funcionalidad de inicio de sesión en el sitio web de Color Lib.

## Comandos

np

- `npm run cypress:runner`: Abre el Cypress Test Runner en Chrome para pruebas de extremo a extremo.
- `npm run cypress:execution`: Ejecuta las pruebas de extremo a extremo en modo headless (sin interfaz gráfica).
- `npm run reporter`: Genera un informe HTML a partir de los resultados de las pruebas.

## Característica

### Descripción

La siguiente característica describe el escenario de inicio de sesión exitoso en el sitio web de Color Lib.

```gherkin
Feature: Como usuario quiero ingresar a la web de Color Lib para realizar login exitoso

  Scenario: Login Exitoso con usuario y contraseña
    Given como usuario quiero abrir la web Color Lib
    When digitar usuario y contraseña
    Then el usuario podrá ver en pantalla el dashboard
