describe('Lectura de tabla', () => {
    it('debería encontrar el valor en la tabla', () => {
      cy.visit('https://www.w3schools.com/html/html_tables.asp')
      cy.contains('td', 'Island Trading').should('exist')
    })
  })
  