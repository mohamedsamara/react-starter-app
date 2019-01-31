/**
 * Style Generator
 */

const styleExists = require("../utils/styleExists");

module.exports = {
  description: "Add a sass style",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "footer",
      validate: value => {
        if (/.+/.test(value)) {
          return styleExists(value)
            ? "A style with this name already exists"
            : true;
        }

        return "The name is required";
      }
    }
  ],
  actions: data => {
    const actions = [
      {
        type: "add",
        path: "../src/styles/sass/core/_{{lowerCase name}}.scss",
        templateFile: "./style/style.scss.hbs",
        abortOnFail: true
      },
      {
        type: "append",
        path: "../src/styles/sass/core/core.scss",
        templateFile: "./style/importSass.hbs"
      }
    ];

    return actions;
  }
};
