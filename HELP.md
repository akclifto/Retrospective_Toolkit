# Getting Started

## Introduction

This is a from-scratch attempt at creating a functional java backend service to wire to frontend. Build tools include Gradle and Yarn. Yarn is used as primary tool for scripts.  See *Yarn Scripts* below.

### Setup After Cloning Repository

* Navigate to the top-level folder in CLI (cd path/to/Retrospective_Toolkit/)
  * Ensure there is package.json in the root folder
  * From CLI, run:
    * npm install yarn
    * yarn
      * This will pull all the dependencies from package.json

#### Yarn Scripts

View the package.json file to see available scripts to run in Yarn.  The goal was to use Yarn script for all scripts related to
development.  The only script not included is starting the Spring Application server.

By default, the Spring server runs Apache Tomcat on local port: 8080.
By default, the frontend development server runs on local port: 3000.

* **build:** Runs webpack to build frontend files. View *webpack.config.js* for more details on build.
* **build-all:** Runs both webpack and gradle to build frontend and backend files.
* **gradle:** Runs gradle to build backend files.
* **gradle-trace:** Runs gradle with stacktrace for debugging.
* **gradle-warn:** Run gradle with warnings to check dependency deprecation.
* **start:** Starts local frontend development environment on port 3000.  

*Script example using CLI: **yarn build-all***

### Reference Documentation

#### References for React

* ~~[Maven](https://maven.apache.org/install.html): Maven used for Java/Spring boot build files.~~
* [Node.js](https://nodejs.org/en/download/): Node is the foundation for React.js.
* [Bebelrc](https://babeljs.io/docs/en/): Babel is a Javascript compiler that makes writing React apps easier and more similar to JS.
* [Webpack](https://webpack.js.org/): Webpack compiles multiple .js files into one file to load into scripts when starting the app.
* [Yarn](https://classic.yarnpkg.com/en/): Makes package, scripting and dependency management easier.

For further reference, please consider the following sections:

* [Official Gradle documentation](https://docs.gradle.org)
* [Spring Boot Gradle Plugin Reference Guide](https://docs.spring.io/spring-boot/docs/2.3.4.RELEASE/gradle-plugin/reference/html/)
* [Create an OCI image](https://docs.spring.io/spring-boot/docs/2.3.4.RELEASE/gradle-plugin/reference/html/#build-image)
* [Spring Web](https://docs.spring.io/spring-boot/docs/2.3.4.RELEASE/reference/htmlsingle/#boot-features-developing-web-applications)

### Guides

The following guides illustrate how to use some features concretely:

* [Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/)
* [Serving Web Content with Spring MVC](https://spring.io/guides/gs/serving-web-content/)
* [Building REST services with Spring](https://spring.io/guides/tutorials/bookmarks/)

### Additional Links

These additional references should also help you:

* [Gradle Build Scans – insights for your project's build](https://scans.gradle.com#gradle)
