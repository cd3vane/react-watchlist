declare namespace Cypress {
      interface Chainable {
        /**
         * Custom command to select DOM element by data-cy attribute.
         * @example cy.dataCy('greeting')
         */
        watchlist(): Chainable<JQuery<HTMLElement>>
        watched(): Chainable<JQuery<HTMLElement>>
      }
    }