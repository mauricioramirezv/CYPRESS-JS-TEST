describe('Búsqueda en Bing', () => {
  it('debería buscar un término y mostrar resultados', () => {
    cy.visit('https://www.bing.com/')
    cy.get('input[name="q"]').type('Cypress testing{enter}')
    cy.get('#b_results').should('exist')
    cy.get('li.b_algo').should('have.length.greaterThan', 0)
  })
})
