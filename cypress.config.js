const { defineConfig } = require("cypress");
const dotenv = require("dotenv");

dotenv.config();

module.exports = defineConfig({
  e2e: {
    projectId: process.env.NEXT_PUBLIC_CYPRESS_ID,
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {},
  },
});
