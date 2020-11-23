# Retrospective_Toolkit

## SER 401 Team 18 Capstone Project

### Authors

Adam Clifton

Christopher Gold

Dillon O'Brien

Sergio Prieto

Shane Thoney

## Table of Contents

- [Introduction](#Introduction)
- [Build Instructions and Testing](#Build-Instructions-and-Testing)
- [Frontend Overview](#Frontend-Overview)
- [Frontend Technology](#Frontend-Technology)
- [Frontend Tools](#Frontend-Tools)
- [Backend Overview](#Backend-Overview)
- [Backend Technology](#Backend-Technology)
- [Backend Tools](#Backend-Tools)
- [Cloud-hosting and Database Overview](#[Cloud-hosting-and-Database-Overview)
- [Cloud-hosting and Database Technology](#[Cloud-hosting-and-Database-Technology)
- [Cloud-hosting and Database Tools](#[Cloud-hosting-and-Database-Tools)
- [Reference Materials](#Reference-Materials)

### Introduction

This Retrospective Toolkit (the "Toolkit") is the product of Team 18's capstone project.  The toolkit will be used as a training tool by our sponsor and will contain two base activities: a cube activity and a model-building activity.

The functional aspects of the Toolkit are separated into three areas: (1) frontend components, (2) backend components, and (3) cloud-hosting and database components.  This document will cover the topics and technology used in the project.

### Build Instructions and Testing

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To initialize dependencies before running:

#### `yarn`

In the project directory, you can run:

#### `yarn start-server`

and then

#### `yarn start-client`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `yarn build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

#### `yarn test`

This invokes the testing framework provided with the `create-react-app` package.  `Yarn test` will first initialize any test components from the `src/setupTests.js` file, then it will search for files with the `*.test.js` naming convention to run provided tests.  The `setupTests.js` file is a top-level file in the `src` folder, similiar to `index.js`.  These tests should be written and placed in the `src/tests/` directory.  Any mock functionality that is needed for test environment is accessed from the `src/tests/__mocks__/` directory.

Mock components and other functionality should be written and placed in the `src/tests/__mocks__/` folder. For more information about react testing, see the [Jest documentation](https://jestjs.io/) and [React Jest Testing](https://jestjs.io/docs/en/tutorial-react).

#### `yarn std`, `yarn std-fix`, `yarn std-file` Code Quality tool

`yarn std` runs standardjs, which is essentially a static analysis tool that checks the style of javascript files for code quality.  
If run in the console, it will output the results from check by file-path and line of the code that should be adjusted to format  
with standard javascript formatting practices.  It will give a brief description of the code quality that is flagged.  
If you have an excessive amount of code flags,  the terminal will express an error has occurred.  This error can be ignored.

`yarn std-fix` will automatically fix the code to proper quality and format.  
This works for roughly 90% of the quality flags found in the code.  The remaining flags will need to be manually adjusted.

`yarn std-file` performs the code quality check and outputs it to a file called `standard_checkstyle.txt` in the 'src/tests/out/' folder.  
The file will be overwritten each time `yarn std-file` is called.  If there are an excessive amount of errors written to the file,  
the console will express an error has occurred. If this occurs, you can open up the output file,  
`standard_checkstyle.txt`, and check the last line written to the file. If the last line written is:

`info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.`, you can ignore the error,  
because the check completed.  If this is not the last line, then something went wrong, and you may need to re-run the `yarn std-file` check.

Ideally, you should run `yarn std` to see your code quality flags.  
Then run `yarn std-fix` to automatically fix any errors that may have occurred.  
Last, run `yarn std-file` to write all the errors to the file that were not fixed automatically so you can fix them manually.  

### Frontend Overview

### Frontend Technology

### Frontend Tools

### Backend Overview

### Backend Technology

### Backend Tools

### Cloud-hosting and Database Overview

### Cloud-hosting and Database Technology

### Cloud-hosting and Database Tools

### Reference Materials

#### References for Frontend/React

- [Node.js](https://nodejs.org/en/download/): Node is the foundation for React.js.
- [Bebelrc](https://babeljs.io/docs/en/): Babel is a Javascript compiler that makes writing React apps easier and more similar to JS.
- [Webpack](https://webpack.js.org/): Webpack compiles multiple .js files into one file to load into scripts when starting the app.
- [Yarn](https://classic.yarnpkg.com/en/): Makes package, scripting and dependency management easier.
- [Create React App](https://github.com/facebook/create-react-app)

#### References for Backend/Node Express

- [ExpressJS](https://expressjs.com/)

#### References for Cloud-hosting and Database Heroku/postgresql

- [Heroku](https://devcenter.heroku.com/categories/reference)
- [Postgresql](https://www.postgresql.org/docs/)

#### Guides

The following guides illustrate how to use some features concretely:

#### Additional Links

These additional references should also help you:

- [Heroku Buildpacks](https://devcenter.heroku.com/articles/buildpacks)  
- [Jest Testing Documentation](https://jestjs.io/)  
- [Jest-Enzyme React Testing Documentation](https://enzymejs.github.io/enzyme/)
