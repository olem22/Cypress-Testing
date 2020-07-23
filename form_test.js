describe('MVP', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3001')
  })
    // cleanup
  
    it('Get the Name input and type a name in it. Check the text.', () => {
       
        cy.get('#usernameInput')
          .type('Have Fun!')
          .should('have.value', 'Have Fun!')
      })

      it('Get the Email input and type an email address in it', () => {
       
        cy.get('#emailInput')
          .type('oleg@oleg.com')  
      })

      it(' Get the password input and type a password in it', () => {
       
        cy.get('#passwordInput')
          .type('12345678')  
      })

      it(' Check to see if a user can check the terms of service box', () => {
       
        cy.get('#tosInput')
        .check().should('be.checked')
          //.click()  
      })
      

      it(' Check to see if a user can submit the form data', () => {
       
        cy.get('#usernameInput') .type('Have Fun!')
        cy.get('#emailInput') .type('oleg@oleg.com')
        cy.get('#passwordInput') .type('12345678')
        cy.get('#tosInput') .check().should('be.checked')
        cy.get('button').click() 
      })

      it(' Check for form validation if an input is left empty', () => {
       
        cy.get('#usernameInput') .should('have.value', '')
        cy.get('#emailInput') .should('have.value','')
        cy.get('#passwordInput') .should('have.value', '')
        //cy.get('#tosInput') .check().should('be.checked', '') 
      })
})

describe('Stretch Goals', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3001')
  })
    // cleanup

    it(' Email with special characters and keymodifiers', () => {
       
      cy.get('#emailInput')
          .type('fake@email.com').should('have.value', 'fake@email.com')
   
          // .type() with special character sequences
          .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
          .type('{del}{selectall}{backspace}')
   
          // .type() with key modifiers
          .type('{alt}{option}')
          .type('{ctrl}{control}')
          .type('{meta}{command}{cmd}')
          .type('{shift}')
   
    })

})
  