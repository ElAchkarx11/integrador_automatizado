describe('login', () => {
  it('Entramos no sistema', () => {
    cy.visit('https://agenda-manicure.netlify.app/')
    cy.get('#email-input').click().type('teste1@gmail.com')
    cy.get('#senha-input').click().type('123456')
    cy.get('#btn-acessar').click()

  })

  it('registramos tarefa', () => {
    cy.visit('https://agenda-manicure.netlify.app/')
    cy.get('#email-input').click().type('teste1@gmail.com')
    cy.get('#senha-input').click().type('123456')
    cy.get('#btn-acessar').click()

    
  })



})
