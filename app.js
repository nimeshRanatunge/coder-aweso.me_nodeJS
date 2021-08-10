//entry point of the application
//where define express app
//controller and routes linked each other
const express = require('express');
const app = express(); // create instance of express, we can access all http methods
const postsRoute = require('./routes/posts');
app.use("/posts", postsRoute)

 //implement endpoint
module.exports = app