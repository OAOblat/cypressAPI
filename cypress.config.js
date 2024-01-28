const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "dd8f2k",
  e2e: {
    video: true,
    baseUrl: "https://petstore.swagger.io/v2",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
