///<reference types="cypress"/>
var faker = require('faker')

describe('Funcionalidade Pré cadastro', () => {
  beforeEach(() => {
    cy.visit('/minha-conta/')
  })
  it('Deve completar o pré cadastro com sucesso', () => {
    let nameFaker = faker.name.firstName()
    let lastFaker = faker.name.lastName()
    let emailFaker = faker.internet.email(nameFaker)

    cy.get('#reg_email').type(emailFaker)
    cy.get('#reg_password').type('teste@teste.com')
    cy.get(':nth-child(4) > .button').click()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(nameFaker)
    cy.get('#account_last_name').type(lastFaker)
    cy.get('.woocommerce-Button').click()
    cy.get('.woocommerce-message').should(
      'contain',
      'Detalhes da conta modificados com sucesso.'
    )
  })

  it('Deve completar o pré-cadastro com sucesso usando comandos customizados', () => {
    let emailFaker2 = faker.internet.email(nameFker)

    cy.preCadastro(emailFaker2, 'senha!@forte', 'Rafaela', 'Nogueira')
    cy.get('.woocommerce-message').should(
      'contain',
      'Detalhes da conta modificados com sucesso.'
    )
  })
})
