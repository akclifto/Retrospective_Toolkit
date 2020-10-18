# Proof of Concept:

## Link to Google Drive Document

<https://docs.google.com/document/d/1kf_w6APINSW6oJW9NumhcHprSIrlgKjEF4zqvafbWGk/edit?usp=sharing>

**Excerpt:**
Proof of Concept: Retrospective Toolkit Research Spikes

## Introduction

Over the course of our sponsor meetings,  we have initiated research spikes into our sprints to further understand and define design aspects for authentication pieces, networking requirements, and web interfaces surrounding the development of the Retrospective Toolkit (the “Toolkit”).  The underlying research allowed us to drill down design aspects, specifically which tools to use for frontend development, backend development, database management, and cloud-service hosting for the development of the Toolkit.

## Goals

The purpose of this project is to provide a viable training tool for State Farm in the form of a web application.  This will be done using a dynamic frontend framework for the client-facing web application, basic authentication to segregate facilitators from users of the Toolkit, a backend framework suitable for State Farm, as well as temporary cloud-hosting and database management.  Upon completion of the project, it is expected that State Farm will integrate the Toolkit into their own hosting and database management services.

The purpose of this proof of concept is to display aspects of knowledge the team has gained from the research spike stories conducted during the sprint. 

## Testing

This section describes testing aspects of the product in three areas:  frontend, backend, and cloud-hosting and database.  Each area overlaps with each other to ensure vertical development:

- Simple landing page for frontend with Node/React.js
  - Test communication with backend
    - Test communication with database, through backend
    - Test build on localhost
    - Test build on cloud-host

- Simple Java backend
  - Test communication with frontend
  - Pass artifact information to frontend, test result.
  - Receive artifact information from frontend, test result.
    - Test communication with database
      - Pass artifact information to store in the database, evaluate the result.
        - Retrieve artifact information from the database, evaluate the result.
    - Test communication with hosting service
      - Test push to cloud-hosting service
        - Test hosting service locally
        - Test hosting service via http hosting url
    - Set up Cloud-hosting service and database
      - Test connection to backend via Spring
        - Test push update to hosting service
        - Test storage with artifact information in database storage
        - Test retrieve artifact information from database storage

## Timeline:

The timeline for development of the Toolkit will be broken down into Sprint goals.  

- Sprint 1
  - Research spikes and determine best use-case for tools
    - Provide basic prototype of web application software
      - Functional frontend, backend, cloud-hosting service and database
    - Present proof of concept to sponsors
- Sprint 2

## Implementation:

Product Aspects and Tools: Frontend

Product Aspects and Tools: Backend

Product Aspects and Tools: Cloud-hosting and Database

Minimum Value Product (MVP):


#### https://www.softwaresuggest.com/blog/proof-of-concept-in-software-development/
