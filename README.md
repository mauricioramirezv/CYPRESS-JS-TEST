# Cypress en JavaScript: laboratorio para estudiantes

Aprenda a automatizar interacciones y **comprobar sus resultados**. La práctica principal usa una aplicación local; no depende de cuentas ni de páginas externas.

## Requisitos

- Node.js 22 o 24 LTS y npm.
- Git, si va a clonar el repositorio.
- Internet para instalar dependencias y descargar Cypress la primera vez.

## Inicio rápido

```powershell
git clone https://github.com/mauricioramirezv/CYPRESS-JS-TEST.git
cd CYPRESS-JS-TEST
npm ci
npm test
```

Si trabaja con el ZIP actualizado, descomprímalo, abra PowerShell en su carpeta y ejecute los dos últimos comandos. `npm test` inicia la aplicación en un puerto disponible, ejecuta las 13 pruebas locales y cierra el servidor. Cypress usa Electron por defecto; no necesita abrir Chrome.

## Ver las pruebas paso a paso

En una terminal:

```powershell
npm run dev
```

En otra terminal, dentro del mismo proyecto:

```powershell
npm run cypress:open
```

Seleccione **E2E Testing**, un navegador y un archivo de `local`. La aplicación estará en http://127.0.0.1:4173. Para ejecutar desde la terminal con ese servidor ya abierto use `npm run cypress:run`.

## Qué se practica

| Archivo en `cypress/e2e/local/` | Objetivo |
| --- | --- |
| `login.cy.js` | Ingreso correcto, usuario incorrecto, contraseña incorrecta y campos vacíos |
| `controles.cy.js` | Localizadores, casilla, lista desplegable y confirmación de un mensaje |
| `datos.cy.js` | Formulario, selección de archivo, lectura de tabla y búsqueda con/sin resultados |

Credenciales de práctica: **estudiante / cypress**. El login se valida en el navegador y solo demuestra el flujo visual; no implementa autenticación de producción. La selección del archivo muestra su nombre, sin enviarlo a un servidor.

## Estructura de una prueba

```javascript
it('rechaza un usuario incorrecto', () => {
  cy.visit('/');
  cy.get('[data-cy=username]').type('otro_usuario');
  cy.get('[data-cy=password]').type('cypress', { log: false });
  cy.get('[data-cy=login-button]').click();
  cy.get('[data-cy=login-message]').should('have.text', 'Credenciales inválidas');
  cy.get('[data-cy=private-area]').should('not.be.visible');
});
```

`visit` abre la página; `get` busca un elemento; `type` y `click` interactúan; `should` comprueba el resultado. Cypress reintenta las consultas y aserciones: evite pausas fijas como `cy.wait(3000)`.

Los atributos `data-cy` separan los localizadores del estilo visual. `find` busca dentro de un elemento: `cy.get('[data-cy=products]').find('tbody tr')`. Cypress no incluye XPath como comando nativo.

## Ejercicios

1. Agregue una prueba con usuario y contraseña incorrectos; compruebe el mensaje y el área privada oculta.
2. Filtre por `Clean Code`; compruebe una sola fila visible y su precio.
3. Modifique un texto esperado para provocar una falla, identifique la aserción y restáurelo.

## Ejemplos externos opcionales

Los ejercicios originales están en `cypress/e2e/externos/`. Pueden fallar por cambios de los sitios, publicidad, bloqueos o disponibilidad. No forman parte de `npm test`.

```powershell
npm run test:externos
```

Revise sus selectores antes de usarlos en clase. No requieren iniciar el servidor local.

## Comprobaciones y problemas frecuentes

- `npm run test:server`: comprueba el servidor sin abrir un navegador.
- Si Cypress no se descarga: revise la conexión/proxy y ejecute `npx cypress install`, luego `npx cypress verify`.
- Si el puerto 4173 está ocupado, cierre el proceso anterior o use `npm test`, que elige otro puerto.
- Las capturas de fallas se guardan en `cypress/screenshots/` y no se suben a Git.

Se conserva Cypress 15 según el archivo de bloqueo. Use `npm ci` para instalar las versiones reproducibles del proyecto.
