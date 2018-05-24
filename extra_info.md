# Extra information and context of packages/dependencies

# ** Dev-Dependencies **

"ava"  (for testing - runs tests concurrently)
"enzyme" (for testing - React components)
"jest" (javascript testing)
"jsdom" (emulate web browser for testing)
"nodemon" (Auto restarts server when in dev)
"sqlite3" (database query tool while in dev)
"supertest" (for testing - server side)
"webpack-dev-server" (dev server providing live reloading - to be used in dev only)

# ** Other Dependencies **
"babel" (transforms ES6 syntax so code is still understood in older versions of browsers)
"babel-core" (uses local config files for transformations)
"babel-loader" (webpack uses to preprocess files - refer to webpack config file)
"babel-preset-env" (previously babel-preset-es2015 - compiles ES2015+ down to ES5)
"babel-preset-react" (supports React language features across browsers)
"babel-preset-stage-0" (enables drop of .bind syntax and simplify in react components)
"babel-register" (binds to node's require and auto compiles files on the fly)
"bcryt" (password hashing)
"cors" (connect/express middleware to enable CORS)
"dotenv" (loads environment variables)
"express" (web framework to organise server side architecture)
"express-jwt" (middleware to validate jwt - JsonWebTokens - and set req.user for auth use across the app)
"jsonwebtoken" (returns JsonWebToken as a string - used in auth/token files)
"jwt-decode" (decodes token info at client side to pull out into e.g. user name)
"knex" (database query builder for both dev and production use)
"passport" (used to authenticate requests on server side - seen in server.js file)
"pg" (PostgreSQL database query tool in prod)
"react" (access to React and ability to write jsx files)
"react-dom" (entry point for DOM related rendering in React components
"react-redux" (bring Redux into React components)
"react-router-dom" (dom bindings for routing via React)
"redux" (import createStore, applyMiddleware, compose, combineReducers from Redux at client side)
"redux-thunk" (used for writing action creators, controlling when these are run/dispatched depending on criteria being met, receives store methods for dispatches and getState as parameters)
"superagent" (enables client side API requests)
"webpack" (module bundler of JavaScript files for the browser)

# ** package.json scripts **
- "postinstall" - run webpack bundler and migrate the latest knex tables
- "dev" - on yarn dev, run and watch nodemon (auto restarts server during dev) and webpack
- "start" - on yarn start, start up the server
- "test" - on yarn test, run the jest tests
- "watch" - watch all files ending in js, jsx, test
- "h:deploy" - shortcut to do git push heroku master
-  "h:migrate" - shortcut to do heroku run knex migrate:latest
- "h:rollback" - shortcut to do heroku run knex migrate:rollback
- "h:seed" - shortcut to do heroku run knex seed:run
- "knex" - yarn run knex

# ** package.json test coverage and mock store**
Adding "collectCoverage": true produces a table of all the files in the app and shows % passed, clearly shows how much of the app has been tested. Satisfying to view.
Adding "setupTestFrameworkScriptFile": "./test/client/localStorageMock"
sets up the mock store for Redux testing.

# .env file
Environment specific variables, config in server side index.js

# .gitignore file
Specifies which files for Git to ignore when pushing up to the repo.