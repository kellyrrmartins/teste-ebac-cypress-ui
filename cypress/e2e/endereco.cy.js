///<reference types="cypress"/>
import enderecoPage from '../support/page-object/endereco.page'
import EnderecoPage from '../support/page-object/endereco.page'

describe('Funcionalidade Endereços - Faturameto e Entrega', () => {
  beforeEach(() => {
    cy.visit('minha-conta')
    cy.fixture('perfil').then(dados => {
      cy.fazerLogin(dados.usuario, dados.senha)
    })
  })
  it.only('Deve fazer cadastro de fatramento com sucesso', () => {
    enderecoPage.editarEnderecoFaturamento(
      'Rafaela',
      'Silva',
      'Voe alto',
      'Brasil',
      'Rua Ladário',
      ' 220',
      'Bela Vista',
      'Mato Grosso do Sul',
      '79840000',
      '679920000',
      'usuario@teste.com'
    )
    cy.get('.woocommerce-message').should(
      'contain',
      'Endereço alterado com sucesso.'
    )
  })
})
