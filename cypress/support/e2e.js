// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// import do plugin do xpath (segundo o documento do cypress, está depricado... ou seja, descontinuado)
require('cypress-xpath')

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Definição de ordernação de bsuca dos selectos
// Default Selector Priority: https://docs.cypress.io/api/cypress-api/selector-playground-api#__docusaurus_skipToContent_fallback
Cypress.SelectorPlayground.defaults({
    selectorPriority: ['data-wc', 'data-cy', 'data-test', 'data-testid', 'id', 'class', 'attributes', 'data-qa', 'id', 'class', 'tag', 'attributes', 'nth-child'],
})

