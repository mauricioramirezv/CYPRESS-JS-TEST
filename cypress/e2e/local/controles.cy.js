describe('Elementos, controles y mensajes', () => {
  beforeEach(() => cy.visit('/'));

  it('encuentra los campos y el botón de ingreso', () => {
    cy.get('[data-cy=username]').should('be.visible');
    cy.get('[data-cy=password]').should('be.visible').and('have.attr', 'type', 'password');
    cy.get('[data-cy=login-button]').should('be.visible').and('have.text', 'Ingresar');
  });

  it('marca y desmarca una casilla', () => {
    cy.get('[data-cy=checkbox]').check().should('be.checked');
    cy.get('[data-cy=checkbox]').uncheck().should('not.be.checked');
  });

  it('selecciona una opción por su valor', () => {
    cy.get('[data-cy=color]').select('green').should('have.value', 'green');
  });

  it('confirma el mensaje después de una acción', () => {
    cy.get('[data-cy=action-message]').should('be.empty');
    cy.get('[data-cy=message-button]').click();
    cy.get('[data-cy=action-message]').should('have.text', 'Acción confirmada');
  });
});
