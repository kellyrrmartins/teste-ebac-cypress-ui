///<reference types="cypress"/>
import EnderecoPage from '../support/page-object/endereco.page'
const dadosEndereco = require('../fixtures/endereço.json')
const dadosEnderecoEntrega = require('../fixtures/endereco-faturamento.json')

describe('Funcionalidade Endereços - Faturameto e Entrega', () => {
  beforeEach(() => {
    cy.visit('minha-conta')
    cy.fixture('perfil').then(dados => {
      cy.fazerLogin(dados.usuario, dados.senha)
    })
  })
  it('Deve fazer cadastro de fatramento com sucesso', () => {
    EnderecoPage.editarEnderecoFaturamento(
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
  it('Deve fazer cadastro de fatramento com sucesso - Usando arquivo de dados', () => {
    EnderecoPage.editarEnderecoFaturamento(
      dadosEndereco[1].nome,
      dadosEndereco[1].sobrenome,
      dadosEndereco[1].empresa,
      dadosEndereco[1].pais,
      dadosEndereco[1].endereco,
      dadosEndereco[1].numero,
      dadosEndereco[1].cidade,
      dadosEndereco[1].estado,
      dadosEndereco[1].cep,
      dadosEndereco[1].telefone,
      dadosEndereco[1].email
    )

    cy.get('.woocommerce-message').should(
      'contain',
      'Endereço alterado com sucesso.'
    )
  })
  it.only('Deve fazer cadastro de fatramento com sucesso - Usando arquivo de dados', () => {
    EnderecoPage.editarEnderecoEntrega(
      dadosEnderecoEntrega[0].nome,
      dadosEnderecoEntrega[0].sobrenome,
      dadosEnderecoEntrega[0].pais,
      dadosEnderecoEntrega[0].endereco,
      dadosEnderecoEntrega[0].cidade,
      dadosEnderecoEntrega[0].estado,
      dadosEnderecoEntrega[0].cep
    )
    cy.get('.woocommerce-message').should(
      'contain',
      'Endereço alterado com sucesso.'
    )
  })
})
