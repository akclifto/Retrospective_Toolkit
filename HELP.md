# Getting Started

### References
* [Node.js](https://nodejs.org/en/download/): 
Node is the foundation for React.js
* [Bebelrc](https://babeljs.io/docs/en/): 
Babel is a Javascript compiler that makes writing React apps easier and more similar to JS.
* [Webpack](https://webpack.js.org/): 
Webpack compiles multiple .js files into one file to load into scripts when starting the app. 
* [Yarn](https://classic.yarnpkg.com/en/):
Makes package and dependency management easier.

### Set up Environment
- Install Node, which  includes npm (which we will use to install other tools)
- Install Yarn via npm locally in the project file path (i.e., path/to/project_name/ ): npm install yarn 
- Install Babel locally in the project:
    - Using Yarn:  yarn add babel-cli
    - Using npm: npm install babel-cli
- Set up Yarn to use dependencies, using Yarn:
    - yarn init
    - will ask a series of questions, you can press enter to move through them without input.
- Install babel presets to work with react, using Yarn:  
    - yarn add babel-preset-react babel-preset-env babel-loader@7.1.5 babel-core
    - yarn add babel-plugin-transform-class-properties
- Install webpack via Yarn:
    - yarn add webpack webpack-cli
- Install React components via Yarn:
    - yarn add react react-dom



### Reference Documentation for Java Spring
For further reference, please consider the following sections:

* [Official Apache Maven documentation](https://maven.apache.org/guides/index.html)
* [Spring Boot Maven Plugin Reference Guide](https://docs.spring.io/spring-boot/docs/2.3.4.RELEASE/maven-plugin/reference/html/)
* [Create an OCI image](https://docs.spring.io/spring-boot/docs/2.3.4.RELEASE/maven-plugin/reference/html/#build-image)
* [Spring Web](https://docs.spring.io/spring-boot/docs/2.3.4.RELEASE/reference/htmlsingle/#boot-features-developing-web-applications)
* [JDBC API](https://docs.spring.io/spring-boot/docs/2.3.4.RELEASE/reference/htmlsingle/#boot-features-sql)
* [Spring Boot Actuator](https://docs.spring.io/spring-boot/docs/2.3.4.RELEASE/reference/htmlsingle/#production-ready)
* [Spring Configuration Processor](https://docs.spring.io/spring-boot/docs/2.3.4.RELEASE/reference/htmlsingle/#configuration-metadata-annotation-processor)
* [Spring Boot DevTools](https://docs.spring.io/spring-boot/docs/2.3.4.RELEASE/reference/htmlsingle/#using-boot-devtools)

### Guides for Java Spring
The following guides illustrate how to use some features concretely:

* [Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/)
* [Serving Web Content with Spring MVC](https://spring.io/guides/gs/serving-web-content/)
* [Building REST services with Spring](https://spring.io/guides/tutorials/bookmarks/)
* [Accessing Relational Data using JDBC with Spring](https://spring.io/guides/gs/relational-data-access/)
* [Managing Transactions](https://spring.io/guides/gs/managing-transactions/)
* [Building a RESTful Web Service with Spring Boot Actuator](https://spring.io/guides/gs/actuator-service/)
