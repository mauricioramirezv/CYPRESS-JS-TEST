describe('Selección en dropdown', () => {
  it('debería seleccionar una opción del menú', () => {
    cy.visit('https://demoqa.com/select-menu')
    cy.get('#oldSelectMenu').select('Green').should('have.value', '4')
  })
})
