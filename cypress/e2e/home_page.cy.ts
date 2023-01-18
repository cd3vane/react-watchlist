import { title } from "process"

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

    it('returns valid search result', () => {
        cy.get('.validate')
            .type(typedText)
            .should('have.value', typedText)
    })

    it('adds movie to watchlist', () => {
        cy.clearLocalStorage().should(() => {
            expect(localStorage.getItem('watchlist')).to.be.null
        }) 
        cy.get('.validate')
            .type(typedText)
            .should('have.value', typedText)
        cy.get('button.Evil-Dead-Rise-watchlist.btn.green.accent-3').click()
            .should('be.disabled')
            .should(() => {
                expect(localStorage.getItem('watchlist')).to.not.be.null
            }) 
    })

    it('adds movie to watched', () => {
        cy.clearLocalStorage().should(() => {
            expect(localStorage.getItem('watchled')).to.be.null
        }) 
        cy.get('.validate')
            .type(typedText)
            .should('have.value', typedText)
        cy.get('button.Evil-Dead-Rise-watchlist.btn.green.accent-3').click()
            .should('be.disabled')
            .should(() => {
                expect(localStorage.getItem('watched')).to.not.be.null
            }) 
    })
  })