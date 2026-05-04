describe('Página principal', () => {
  it('debería cargar correctamente', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Kitchen Sink').should('be.visible')
  })
})
