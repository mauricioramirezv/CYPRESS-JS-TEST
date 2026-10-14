describe('Interacción con formulario', () => {
  it('debería llenar un campo y validar el valor', () => {
    cy.visit('https://demoqa.com/text-box')

    cy.get('#userName').type('Gabriel Ramírez')
    cy.get('#userEmail').type('gabriel@example.com')
    cy.get('#currentAddress').type('Cra 1 #23-45')
    cy.get('#permanentAddress').type('Calle 100 #10-20')
    cy.get('#submit').click()

    cy.get('#name').should('contain', 'Gabriel Ramírez')
    cy.get('#email').should('contain', 'gabriel@example.com')
  })
})
