describe('The watchlist', () => {
    beforeEach(() => {
        cy.watchlist()
    })

    it('loads and starts with default entries', () => {
        cy.get('.movie-card')
            .should('have.length', 3)
    })

    it('removes an entry from the list', () => {
        cy.get('.ctrl-btn').first()
            .should('have.text', "remove_circle_outline").click()
        cy.get('.movie-card')
            .should('have.length', 2)
    })

    it('moves an entry to the watched list', () => {
        cy.get('.ctrl-btn:first').next()
            .should('have.text', "video_library").click()
        cy.get('.movie-card')
            .should('have.length', 2)
        cy.visit('/watched')
            .get('.movie-card').should('have.length', 1)
    })
  })
