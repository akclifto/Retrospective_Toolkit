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
- [Build Instructions](#Build-Instructions)
- [Frontend Overview](#Frontend-Overview)
- [Frontend Technology](#Frontend-Technology)
- [Frontend Tools](#Frontend-Tools)
- [Backend Overview](#Backend-Overview)
- [Backend Technology](#Backend-Technology)
- [Backend Tools](#Backend-Tools)
- [Cloud-hosting and Database Overview](#Cloud-Hosting-and-Database-Overview)
- [Reference Materials](#Reference-Materials)
  - [Frontend](#References-for-Frontend)
  - [Backend](#References-for-Backend)
  - [Cloud-hosting](#References-for-Cloud-hosting)
  - [Testing Tools](#Testing-Tools)

### Introduction

This Retrospective Toolkit (the "Toolkit") is the product of Team 18's capstone project. The toolkit will be used as a training tool by our sponsor and will contain two base activities: a cube activity and a model-building activity.

The functional aspects of the Toolkit are separated into three areas: (1) frontend components, (2) backend components, and (3) cloud-hosting and database components. This document will cover the topics and technology used in the project.

[Back to Top](#Table-of-Contents)

### Build Instructions

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

This invokes the testing framework provided with the `create-react-app` package. `Yarn test` will first initialize any test components from the `src/setupTests.js` file, then it will search for files with the `*.test.js` naming convention to run provided tests. The `setupTests.js` file is a top-level file in the `src` folder, similiar to `index.js`. These tests should be written and placed in the `src/tests/` directory. Any mock functionality that is needed for test environment is accessed from the `src/tests/__mocks__/` directory.

Mock components and other functionality should be written and placed in the `src/tests/__mocks__/` folder. For more information about react testing, see the [Jest documentation](https://jestjs.io/) and [React Jest Testing](https://jestjs.io/docs/en/tutorial-react).

[Back to Top](#Table-of-Contents)

### Frontend Overview

The frontend consists of a landing for the cube activity, information about the activity and the activity board. There is the ability to have administrative or user login.

[Back to Top](#Table-of-Contents)

### Frontend Technology

The frontend is a Node/ReactJS build. The Cube activity game makes use of a physics library called `three.js` and its supporting libraries `react-three-fiber`. The frontend includes a full testing suite with heavy utilization of `jest` and supporting libraries. See [Reference Materials](#Reference-Materials) for more information.

[Back to Top](#Table-of-Contents)

### Frontend Tools

Tools:

- three.js
- react-three-fiber
- axios
- aws-sdk
- material-ui
- React related libraries

Testing Tools:

- jest
- enzyme
- supertest
- testing-library
- react-test-renderer

### Backend Overview

The backend consists of a seperate server package that handles authentication, middleware and database queries along with its usual server functionality (routing, controllers, etc.).

[Back to Top](#Table-of-Contents)

### Backend Technology

The backend is a Node/ExpressJS build. Databases used include `Postgres` and `Redis`. The backend contains a full testing suite with using `jest` and supporting libraries. See [Reference Materials](#Reference-Materials) for more information.

[Back to Top](#Table-of-Contents)

### Backend Tools

Tools:

- redis
- postgres
- bcrypt
- Express related libraries

Testing Tools:

- jest
- supertest
- mocha
- chai

[Back to Top](#Table-of-Contents)

### Cloud Hosting and Database Overview

- Heroku is used to host the application for its ease of use and cost effectiveness. See [Reference Materials](#Reference-Materials) for more information about Heroku.

[Back to Top](#Table-of-Contents)

### Reference Materials

#### References for Frontend

- [Node.js](https://nodejs.org/en/download/): Node is the foundation for React.js.
- [Bebelrc](https://babeljs.io/docs/en/): Babel is a Javascript compiler that makes writing React apps easier and more similar to JS.
- [Webpack](https://webpack.js.org/): Webpack compiles multiple .js files into one file to load into scripts when starting the app.
- [Yarn](https://classic.yarnpkg.com/en/): Makes package, scripting and dependency management easier.
- [Create React App](https://github.com/facebook/create-react-app)
- [three.js](https://threejs.org/)
- [react-three-fiber](https://github.com/pmndrs/react-three-fiber)
- [axios](https://github.com/axios/axios)
- [material-ui](https://material-ui.com/)
- [aws-sdk](https://aws.amazon.com/sdk-for-javascript/)

#### References for Backend

- [Redis](https://redis.io/documentation)
- [Postgresql](https://www.postgresql.org/docs/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [ExpressJS](https://expressjs.com/)

#### References for Cloud-hosting

- [Heroku](https://devcenter.heroku.com/categories/reference)
- [Heroku Buildpacks](https://devcenter.heroku.com/articles/buildpacks)

#### Testing Tools

Full-stack Tools:

- [Jest Testing Documentation](https://jestjs.io/)
- [Jest-Enzyme React Testing Documentation](https://enzymejs.github.io/enzyme/)

Frontend Unit Testing:

- [Enzyme](https://enzymejs.github.io/enzyme/)
- [React Test Renderer](https://reactjs.org/docs/test-renderer.html)
- [Testing Library](https://testing-library.com/docs/)

Backend Integration Testing:

- [Supertest](https://www.npmjs.com/package/supertest)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)

[Back to Top](#Table-of-Contents)
