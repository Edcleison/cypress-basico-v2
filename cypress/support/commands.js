Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function(){
    cy.get('#firstName').type('Edcleison')
    cy.get('#lastName').type('Morais')
    cy.get('#email').type('email@teste.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button','Enviar').click()
})