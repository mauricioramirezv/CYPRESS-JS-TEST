describe('Formulario de Login', () => {
    it('debería rechazar credenciales inválidas', () => {
      cy.visit('https://practicetestautomation.com/practice-test-login/')
      cy.get('#username').type('incorrectUser')
      cy.get('#password').type('incorrectPassword')
      cy.get('#submit').click()
      cy.get('.show').should('contain', 'Your username is invalid!')
    })
  })
  