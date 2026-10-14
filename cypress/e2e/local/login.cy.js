describe('Login local', () => {
  beforeEach(() => cy.visit('/'));

  function login(user, password) {
    cy.get('[data-cy=username]').type(user);
    cy.get('[data-cy=password]').type(password, { log: false });
    cy.get('[data-cy=login-button]').click();
  }

  it('permite el acceso con credenciales válidas', () => {
    login('estudiante', 'cypress');
    cy.get('[data-cy=login-message]').should('have.text', 'Inicio de sesión exitoso');
    cy.get('[data-cy=private-area]').should('be.visible');
  });

  it('rechaza un usuario inválido', () => {
    login('incorrecto', 'cypress');
    cy.get('[data-cy=login-message]').should('have.text', 'Credenciales inválidas');
    cy.get('[data-cy=private-area]').should('not.be.visible');
  });

  it('rechaza una contraseña inválida', () => {
    login('estudiante', 'incorrecta');
    cy.get('[data-cy=login-message]').should('have.text', 'Credenciales inválidas');
    cy.get('[data-cy=private-area]').should('not.be.visible');
  });

  it('solicita completar los campos vacíos', () => {
    cy.get('[data-cy=login-button]').click();
    cy.get('[data-cy=login-message]').should('have.text', 'Complete usuario y contraseña');
    cy.get('[data-cy=private-area]').should('not.be.visible');
  });
});
