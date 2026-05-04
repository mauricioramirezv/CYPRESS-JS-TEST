describe('Carga de archivos', () => {
    it('debería permitir subir un archivo', () => {
      cy.visit('https://the-internet.herokuapp.com/upload')
      const filepath = 'example.json'  // Usa un archivo existente en fixtures
      cy.get('input[type="file"]').selectFile(`cypress/fixtures/${filepath}`)
      cy.get('#file-submit').click()
      cy.get('#uploaded-files').should('contain', 'example.json')
    })
  })
  