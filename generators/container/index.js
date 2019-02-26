/**
 * Container Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a container component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Form',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      }
    },
    {
      type: 'confirm',
      name: 'wantHeaders',
      default: false,
      message: 'Do you want headers?'
    },
    {
      type: 'confirm',
      name: 'wantCSS',
      default: false,
      message: 'Does it have styling?'
    },
    {
      type: 'confirm',
      name: 'wantActionsAndReducer',
      default: true,
      message:
        'Do you want an actions/constants/reducer  for this container?'
    },
    {
      type: 'confirm',
      name: 'wantThunk',
      default: true,
      message: 'Do you want thunk for asynchronous flows? (e.g. fetching data)'
    },
    {
      type: 'confirm',
      name: 'wantValidator',
      default: true,
      message: 'Do you want to validate strings? (e.g.  validator.isEmail(\'foo@bar.com\'))'
    },
    {
      type: 'confirm',
      name: 'wantMessages',
      default: true,
      message: 'Do you want i18n messages (i.e. will this component use text)?'
    },
    {
      type: 'confirm',
      name: 'wantTypes',
      default: true,
      message:
        'Do you want types in your container (i.e. id: PropTypes.number.isRequired)?'
    }
  ],
  actions: data => {
    // Generate index.js and index.test.js
    const actions = [
      {
        type: 'add',
        path: '../src/containers/{{properCase name}}/index.js',
        templateFile: './container/index.js.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../src/containers/{{properCase name}}/tests/index.test.js',
        templateFile: './container/test.js.hbs',
        abortOnFail: true
      }
    ];

    // If they want a CSS file, add styles.css
    if (data.wantCSS) {
      actions.push({
        type: 'add',
        path: '../src/containers/{{properCase name}}/styles.css',
        templateFile: './container/styles.css.hbs',
        abortOnFail: true
      });
    }

    // If they want a types file, add styles.css
    if (data.wantTypes) {
      actions.push({
        type: 'add',
        path: '../src/containers/{{properCase name}}/types.js',
        templateFile: './container/types.js.hbs',
        abortOnFail: true,
      });
    }

    // If component wants messages
    if (data.wantMessages) {
      actions.push({
        type: 'add',
        path: '../src/containers/{{properCase name}}/messages.js',
        templateFile: './container/messages.js.hbs',
        abortOnFail: true
      });
    }

    // If they want actions and a reducer, generate actions.js, constants.js,
    // reducer.js, thunk.js and the corresponding tests for actions, reducer, and thunk
    if (data.wantActionsAndReducer) {
      // Actions
      actions.push({
        type: 'add',
        path: '../src/containers/{{properCase name}}/actions.js',
        templateFile: './container/actions.js.hbs',
        abortOnFail: true
      });
      actions.push({
        type: 'add',
        path: '../src/containers/{{properCase name}}/tests/actions.test.js',
        templateFile: './container/actions.test.js.hbs',
        abortOnFail: true
      });

      // Constants
      actions.push({
        type: 'add',
        path: '../src/containers/{{properCase name}}/constants.js',
        templateFile: './container/constants.js.hbs',
        abortOnFail: true
      });

      // Reducer
      actions.push({
        type: 'add',
        path: '../src/containers/{{properCase name}}/reducer.js',
        templateFile: './container/reducer.js.hbs',
        abortOnFail: true
      });
      actions.push({
        type: 'add',
        path: '../src/containers/{{properCase name}}/tests/reducer.test.js',
        templateFile: './container/reducer.test.js.hbs',
        abortOnFail: true
      });
    }

    // Thunk
    if (data.wantThunk) {
      actions.push({
        type: 'add',
        path: '../src/containers/{{properCase name}}/thunks.js',
        templateFile: './container/thunks.js.hbs',
        abortOnFail: true
      });
      actions.push({
        type: 'add',
        path: '../src/containers/{{properCase name}}/tests/thunks.test.js',
        templateFile: './container/thunks.test.js.hbs',
        abortOnFail: true
      });
    }

    return actions;
  }
};
