describe('The watched list', () => {
    beforeEach(() => {
        cy.watched()
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

    it.only('moves an entry to the watched list', () => {
        cy.get('.ctrl-btn:first').next()
            .should('have.text', "add_to_queue").click()
        cy.get('.movie-card')
            .should('have.length', 2)
        cy.visit('/watchlist')
            .get('.movie-card').should('have.length', 1)
    })
  })