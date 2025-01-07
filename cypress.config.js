const { defineConfig } = require("cypress");
const dotenv = require("dotenv");

dotenv.config();
const baseUrl = "http://localhost:3000";
module.exports = defineConfig({
  e2e: {
    projectId: process.env.NEXT_PUBLIC_CYPRESS_ID,
    baseUrl,
    setupNodeEvents(on, config) {},
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },
  env: {
    baseUrl,
  },
});
