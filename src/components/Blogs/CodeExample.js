// src/codeExamples.js
export const seleniumCode = `const { Builder, By, until } = require('selenium-webdriver');

(async function example() {
    // Launch a new browser instance (Chrome in this case)
    let driver = await new Builder().forBrowser('chrome').build();
    // Navigate to a website
    await driver.get('https://example.com');

    // Get the title of the page and log it
    let title = await driver.getTitle();
    console.log('Page title is: ' + title);

    // Find an element on the page using its CSS selector
    let element = await driver.findElement(By.css('h1'));

    // Wait for an element to be located and visible
    await driver.wait(until.elementLocated(By.id('someId')), 10000);

    // Close the browser session
    await driver.quit();
  }
})`;

export const cypressCode = `describe('Cypress Test', () => {
  it('This is a basic test example code', () => {
    // visit to the url
    cy.visit('https://example.com');
    // assert url include /example.com
    cy.url().should('include', '/example.com')
    // assert title of page
    cy.title().should('eq', 'Example Domain');
  });
});`;

export const playwrightCode = `const { chromium } = require('playwright');
import test from '@playwright/test'

test("This is a basic test example code",async () => {
  // launch browser
  const browser = await chromium.launch();
  // create page using browser
  const page = await browser.newPage();
  // navigate to the url
  await page.goto('https://example.com');
  // fetch the title
  const title = page.title();
  // assert the title
  await expect(title).toHaveText("ABCD")
  // close the browser
  await browser.close();
})`;


export const cypressLocatorsAndmethods = `make sure you add /// <reference types="cypress" /> on every file

// cypress/support/locators.js

class Locators {
getUserNameField() {
return cy.get('#username')
}

getPasswordField() {
return cy.get('#password')
}

getSubmitButton() {
return cy.get('button[type="submit"]')
}

getErrorMessage() {
return cy.get('.error-message')
}

}
export default Locators

// cypress/support/commands.js
import { Locators } from './locators';

const locators = new Locators()

// Custom command to log in
Cypress.Commands.add('login', (username, password) => {
  locators.getUserNameField().should("be.visible").type(username).should('have.value', username); // Type username
  locator.getPasswordField().should("be.visible").type(password).should('have.value', password); // Type password
  locators.getSubmitButton().should("be.visible").click();         // Click submit button
});

// Custom command to verify error message
Cypress.Commands.add('verifyErrorMessage', (expectedMessage) => {
  locators.getErrorMessage().should('contain.text', expectedMessage);
});


// cypress/support/e2e.js
import './commands';


// cypress/e2e/login.spec.js
describe('Login Page Test', () => {
  it('Login with invalid credentials should display error message', () => {
    // Visit the login page
    cy.visit('https://example.com/login');

    // Assert the page URL
    cy.url().should('include', '/login');

    // Assert the page title
    cy.title().should('eq', 'Login - Example');

    // Use the custom login command
    cy.login('invalidUser', 'invalidPass');

    // Verify error message using custom command
    cy.verifyErrorMessage('Invalid username or password.');
  });
});

## Structure of the Cypress Directories

Cypress/
│
├── cypress/
│   ├── fixtures/
│   ├── e2e/
│   │   └── login.spec.js  // Test spec file
│   ├── plugins/
│   ├── support/
│   │   ├── commands.js    // Custom methods file
│   │   ├── locators.js    // Locator definitions file
│   │   └── e2e.js       // Support file to import commands
│
├── node_modules/
├── cypress.json           // Cypress configuration file
├── package.json           // Project dependencies and scripts
└── README.md              // Optional: Project documentation
`
