/// <reference type="cypress"/>

describe('US-012-funcionalidade: cadastro de membros', () => {
  it('Deve fazer o cadrastro de campos obrigatorios', () => {

    cy.visit('http://192.168.56.1:8080/')
    cy.get('#signup-firstname').type('jeferson')
    cy.get('#signup-lastname').type('rodrigo')
    cy.get('#signup-email').type('jefersondacostacomercial@gmail.com')
    cy.get('#signup-phone').type('11970924911')
    cy.get('#signup-password').type('Jeferson1401@')
    cy.get('#signup-button').click()
  })
})