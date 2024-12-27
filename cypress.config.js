const { defineConfig } = require("cypress");
const { envConfig } = require("./env.config");

module.exports = defineConfig({
  e2e: {
    projectId: envConfig.cypress.id,
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {},
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },
});
