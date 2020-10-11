# Team 18's notes for Web Design and Architecture.

## Sergio

- **Java Spring Boot** would utilize a REST to send and receive data from the the backend and the website. This data will be formatted in JSON as we will be using javascript of some sort for the website design.
  
  - This approach is easy as the setup is handled by spring framework that exists in most IDEs.

  - Talks to the browser via GET and POST calls which contain JSON objects.

  - Easy to implement with Heroku as it sets up either gradle or maven during spring setup.

- **ReactJS** is a library to greatly ease the creation process of the project. It is built on top of nodeJS.
  
  - Easily modularize elements of website into components for reuse.

  - Ton of libraries to make designing web interface and animation easier.

## Dillon

## Shane
Possible animation libraries
* react-motion — A spring that solves your animation problems.
* react-spring — A spring physics based React animation library.
* ant-motion — Animate specification and components of Ant Design.
* react-move — Beautiful, data-driven animations for React.
* react-flight — The best way to build animation compositions for React.
* react-flip-move — Effortless animation between DOM changes (eg. list reordering) using the FLIP technique.
* react-burger-menu — An off-canvas sidebar component with a collection of effects and styles using CSS transitions and SVG path animations.
* animated — Declarative Animations Library for React and React Native
* react-tween-state — React animation.
* react-animations — A collection of animations for inline style libraries

Excellent article discussing some animation strategies [React Animation Basics](https://medium.com/hackernoon/5-ways-to-animate-a-reactjs-app-in-2019-56eb9af6e3bf)

## Adam

- **React JS:**  Use Node/React for frontend web application
  -  React-Router can be used for page routes client-side.
  -  React has extensive libraries that could be utilized to make dev easier
  -  Will need async controllers to communicate with Java backend.
      - found initial setup getting comms with java to be tough (mostly due to my lack of experience with async and Java Spring)
- **Java Spring Boot:** backend. Suggested by sponsor as they primarily use Java for their backend.
  - Spring initializer app helps eliminate alot of boiler plate code creation.  
  - Integrates well with Maven
  - Requires async calls to communicate with frontend Node/React.
      - will need to research this topic more when we begin to use it.


