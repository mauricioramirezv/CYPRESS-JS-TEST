describe('Formulario, archivo y tabla', () => {
  beforeEach(() => cy.visit('/'));

  it('confirma los datos ingresados en el formulario', () => {
    cy.get('[data-cy=name]').type('Ana Prueba');
    cy.get('[data-cy=email]').type('ana@example.com');
    cy.get('[data-cy=submit-contact]').click();
    cy.get('[data-cy=contact-result]').should('have.text', 'Registrado: Ana Prueba (ana@example.com)');
  });

  it('muestra el nombre del archivo seleccionado', () => {
    cy.get('[data-cy=upload]').selectFile('cypress/fixtures/example.json');
    cy.get('[data-cy=file-name]').should('have.text', 'example.json');
  });

  it('lee un producto y su precio en la misma fila', () => {
    cy.get('[data-cy=products]').find('tbody tr').should('have.length', 3);
    cy.contains('[data-cy=products] tbody tr', 'Clean Code').find('td').eq(1).should('have.text', '30');
  });

  it('filtra la tabla por el nombre del producto', () => {
    cy.get('[data-cy=search]').type('typescript');
    cy.get('[data-cy=products] tbody tr:visible').should('have.length', 1).and('contain', 'Testing TypeScript');
    cy.get('[data-cy=empty-results]').should('not.be.visible');
  });

  it('muestra un mensaje cuando no existen coincidencias', () => {
    cy.get('[data-cy=search]').type('producto_inexistente');
    cy.get('[data-cy=products] tbody tr:visible').should('have.length', 0);
    cy.get('[data-cy=empty-results]').should('be.visible').and('have.text', 'Sin resultados');
  });
});
