describe('Checkboxes', () => {
    it('debería marcar y desmarcar un checkbox', () => {
      cy.visit('https://the-internet.herokuapp.com/checkboxes')
      cy.get('form input[type="checkbox"]').first().check().should('be.checked')
      cy.get('form input[type="checkbox"]').first().uncheck().should('not.be.checked')
    })
  })
  