# <p align="center">About MERN Stack
##Introduction
MERN is a scaffolding tool which makes it easy to build universal apps using Mongo, Express, React and NodeJS. It minimises the setup time and gets you up to speed using proven technologies.
MERN uses Webpack for bundling modules. There are four types of Webpack configs provided webpack.config.dev.js (for development), webpack.config.prod.js (for production), webpack.config.server.js (for bundling server in production) and webpack.config.babel.js (for babel-plugin-webpack-loaders for server rendering of assets included through webpack).

## Introduction to MongoDB
MongoDB is an open-source document database that provides high performance, high availability, and automatic scaling.
### 1. Document Database
A record in MongoDB is a document, which is a data structure composed of field and value pairs. MongoDB documents are similar to JSON objects. The values of fields may include other documents, arrays, and arrays of documents.
### 2. Key Features
* #### High Performance
   MongoDB provides high performance data persistence.
    Support for embedded data models reduces I/O activity on database system.
    Indexes support faster queries and can include keys from embedded documents and arrays.
* #### Rich Query Language
   MongoDB supports a rich query language to support read and write operations (CRUD)
* #### High Availability
  MongoDB’s replication facility, called replica set, provides automatic failover and data redundancy.
* #### Horizontal Scalability
  MongoDB provides horizontal scalability as part of its core functionality.

## Introduction to ExpressJS
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is an open source framework developed and maintained by the Node.js foundation.
Express provides a minimal interface to build our applications. It provides us the tools that are required to build our app. It is flexible as there are numerous modules available on npm, which can be directly plugged into Express.

## About React
React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.
React is a front-end library developed by Facebook. It is used for handling the view layer for web and mobile apps. ReactJS allows us to create reusable UI components. It is currently one of the most popular JavaScript libraries and has a strong foundation and large community behind it.
### 1. React Features
* JSX is JavaScript syntax extension. It isn't necessary to use JSX in React development, but it is recommended.
* React is all about components. You need to think of everything as a component. This will help you maintain the code when working on larger scale projects.
* Unidirectional data flow and Flux, React implements one-way data flow which makes it easy to reason about your app. Flux is a pattern that helps keeping your data unidirectional.
### 2. React Advantages
* Uses virtual DOM which is a JavaScript object. This will improve apps performance, since JavaScript virtual DOM is faster than the regular DOM.
* Can be used on client and server side as well as with other frameworks.
* Component and data patterns improve readability, which helps to maintain larger apps.
### 3. React Limitations
* Covers only the view layer of the app, hence you still need to choose other technologies to get a complete tooling set for development.
* Uses inline template and JSX, which might seem awkward to some developers.

## Introduction to Node.js
Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.
### 1. Features of Node.js
*  Asynchronous and Event Driven, all APIs of Node.js library are asynchronous, that is, non-blocking. It essentially means a Node.js based server never waits for an API to return data. The server moves to the next API after calling it and a notification mechanism of Events of Node.js helps the server to get a response from the previous API call.
* Very Fast, Being built on Google Chrome's V8 JavaScript Engine, Node.js library is very fast in code execution.
* Single Threaded but Highly Scalable, Node.js uses a single threaded model with event looping. Event mechanism helps the server to respond in a non-blocking way and makes the server highly scalable as opposed to traditional servers which create limited threads to handle requests.
* No Buffering, Node.js applications never buffer any data. These applications simply output the data in chunks.
