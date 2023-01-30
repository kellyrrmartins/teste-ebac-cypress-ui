///<reference types="cypress"/>

describe('Funcionalidade Endereços - Faturameto e Entrega', () => {
  beforeEach(() => {
    cy.visit('minha-conta')
    cy.fixture('perfil').then(dados => {
      cy.fazerLogin(dados.usuario, dados.senha)
    })
  })
  it('Deve fazer cadastro de fatramento com sucesso', () => {})
})
