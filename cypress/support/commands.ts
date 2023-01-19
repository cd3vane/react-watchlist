/// <reference types="cypress" />

Cypress.Commands.add('watchlist', () => {
    cy.fixture('watchlist.json').then((data) => {
        localStorage.setItem('watchlist', JSON.stringify(data))
    })
    cy.visit('/watchlist')
})

Cypress.Commands.add('watched', () => {
    cy.fixture('watched.json').then((data) => {
        localStorage.setItem('watched', JSON.stringify(data))
    })
    cy.visit('/watched')
})
