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

## Chris
- **Fontend:** 
  - React.JS would be the best framework as it is used widely in industry and was also a technology that was suggested by our sponsor. It also has fantastic documentation and a large community around it which has created many libraries to make development work with react easier.
  - Vue.JS is another fantastic framework. It is not as widely used as react, but it can accomplish everything react can and it seems it can be easier to develop in.
- **Backend:** 
  - Node.JS with Express.JS REST API
    - This is pretty much the standard and would be the easiest to get up and running as Heroku and Firebase both support Node.JS applications out of the box. It is quick and performs exceptionally well provided it is not serving as the backend to something that is computationally heavy. Development time is also lessened as it takes less lines of code then it would to accomplish the same thing with other solutions.
   - GraphQL/Apollo Client
      - GraphQL is another option, but since our requirements are not complex, a REST API would perform better and take less development time to implement. It has the benefit however of being able to fetch all required information in one api call which can prevent requesting too many or too few fetch calls. It also operates on a single end point as opposed to the multiple used in a REST API. This dynamic behavior however comes at a cost as it doesn't benefit from the caching REST API calls enjoy. This causes GraphQL implementation to take a performance hit. For use cases however with complex queries however, it can function very well.
    - Spring Boot
      - This is a technology that was recommended by the sponsor as they are mostly a Java house. Can work as a backend for the project but it would take more work to get it running with the other technologies we are using in the project. This solution also has a larger memory footprint which with cloud services can create greater costs. It is a solid enterprise solution, but since we are not dealing with a data heavy or computationally heavy application, we would have better performance and quicker development time using a Node.JS/Express approach.
