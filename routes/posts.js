const express = require('express');
const postsController = require('../controllers/post.controller');

const router = express.Router();
router.get("/", postsController.index); //2nd one :  method we want to execute by accessing that particular end point

module.exports = router;