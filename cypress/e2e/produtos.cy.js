/// <reference types="cypress" />

describe('Funcionalidade Página de produto', () => {
  beforeEach(() => {
    cy.visit('produtos/page/2/')
  })

  it('Deve selecionar um produto da lista', () => {
    cy.get('[class="product-block grid"]')
      // .first()
      // .last()
      // .eq(3)
      .contains('Atomic Endurance Running Tee (V-neck)')
      .click()
  })

  it('Deve adicionar um produto ao carrinho', () => {
    let quantidade = 8
    cy.get('[class="product-block grid"]')
      .contains('Atomic Endurance Running Tee (V-neck)')
      .click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Yellow').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    cy.get('.woocommerce-message').should(
      'contain',
      `${quantidade} × “Atomic Endurance Running Tee (V-neck)” foram adicionados no seu carrinho.`
    )
  })
  it('Deve adicionar produtos ao carrinho - Usando comandos customizados', () => {
    cy.addProdutos('Atomic Endurance Running Tee (Crew-Neck)', 'M', 'Black', 3)
  })

  it('Deve adicionar produtos ao carrinho - Usando comandos customizados', () => {
    cy.addProdutos('Atomic Endurance Running Tee (V-neck)', 'L', 'Blue', 4)
  })
})
