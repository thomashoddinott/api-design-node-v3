https://frontendmasters.com/courses/api-design-nodejs-v3/

**What is an API?**

A server that creates an HTTP interface for interacting with some data

**What about REST?**

Most popular API design pattern, but it's not the silver bullet. _strict_ REST APIsdon't really exist

- An API design that combines DB resources, routes, and HTTP verbs to allow apps to describe what (CRUD) action they are trying to perform
- Popularised when SaaS products started offering APIs for integrations 
- Works with basic data models
- Hard to scale with complex data models and client requirements

**Node.js and APIs**

Built for high concurrent APIs that are not CPU intensive 

- Node.js === JS - async and event driven 
- Singled threaded (can optimise)
- When kept async, Node can handle a high amount of concurrent requests 
- Not great for CPU intensive work (data cruncing, ML, big maths)
- Many OS tools to help build APIs

**Express**

The standard API framework for Node.js

- Handles all the tedious tasks like managing sockets, route matching, error handling, and more
- OS
- Huge community and support from anything that has to do with APIs in Node

**MongoDB**

The go-to non-relational DB. Works like a dream in Node

- Non-relational document store that is easy to get started and scales well
- "basically a JSON store"
- OS and backed by a big company
- Tons of hosting solutions
- ORM / ODM tools like Mongoose

**Middleware**

List of functions that execute, in order, before your controllers

- Allow you to execute functions on an incoming request with guaranteed order
- Great for authenticating, transforming the request, tracking, error handling
- Middleware can also respond to requests like a controller, but that's not their main intent

e.g. `app.use(json())` in express. A lot to do manually otherwise

**REST routes with Express**

Express was designed with REST in mind and has all you need

- Express has a robust route matching system that allows for exact, glob, and parameter matching
- It also supports HTTP verbs on a route based level
- Routes match in the order they are defined (top to bottom)
- For abstraction, Express allows you to create sub routers that combine to make a full router

**Auth basics**

You can never truly protect an API, but requiring authentication makes it a bit safer

- *Authentication* is controlling if an incoming request can proceed or not
- *Authorisation* is controlling if an authenticated request has the correct permissions to access a resource
- Identification is determing who the requester is

**JWT authentication**

Tokens passed every request to check auth on the server

- A bearer token strategy that allows the API to be stateless with user auth
- Created by a combination of secrets on the API and a payload like a user object
- Must be sent with every request where the API will then try to verify the token was created with the expected secrets
- After successful validation, JWT payload is accessible to the server. Can be used to authorise and identify









