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
