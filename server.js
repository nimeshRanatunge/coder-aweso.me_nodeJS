//write server
const http = require('http');
const app = require('./app');
const port = 3000;

const server = http.createServer(app); //pass express application that we created in the app.js file

//we want our server to listen to perticular port we have define here

server.listen(port); // now server can listen to port no 3000 and it can access all requests that are coming to the application
