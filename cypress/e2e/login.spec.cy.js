///<reference types="cypress"/>

context("Funcionalidade login", () => {
  it("Deve fazer login com sucesso", () => {
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
    cy.get("#username").type("aluno_ebac@teste.com")
    cy.get("#password").type("teste@teste.com")
    cy.get(".woocommerce-form > .button").click()
    cy.get(".page-title").should("contain", "Minha conta")
    cy.get(".woocommerce-MyAccount-content > :nth-child(2)").should(
      "contain",
      "Olá"
    )
  })
  it("Deve exibir uma mensagem de erro ao inserir usuario inválido", () => {
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
    cy.get("#username").type("ebac@teste.com")
    cy.get("#password").type("teste@teste.com")
    cy.get(".woocommerce-form > .button").click()
    //  a mesnsagem com teste informando o que o email não corresponde ao cadastrado não aparece
  })

  it("Deve exibir uma mensagem de erro ao inserir uma senha inválida", () => {
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
    cy.get("#username").type("aluno_ebac@teste.com")
    cy.get("#password").type("teste@teste")
    cy.get(".woocommerce-form > .button").click()
    cy.get(".woocommerce-error > li").should("contain", "a senha fornecida")
  })
})
