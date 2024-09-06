import { defineConfig } from "cypress";
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  e2e: {
    projectId: process.env.NEXT_PUBLIC_CYPRESS_ID,
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {},
  },
});
