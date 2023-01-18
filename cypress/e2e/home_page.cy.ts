describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('/watchlist') // change URL to match your dev URL
    })
  })

  describe('Add a movie to watchlist', () => {
    const typedText = 'Evil Dead'
    beforeEach(() => {
        cy.visit('/search')
    })
   
    it('searches for movie', () => {
      cy.focused()
        .should('have.class', 'validate')
    })

    it('accepts input', () => {
        cy.get('.validate')
            .type(typedText)
            .should('have.value', typedText)
    
    })
  })