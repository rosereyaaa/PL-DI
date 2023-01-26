const express = require('express');

const router = express.Router();

// import controller methods

// const { create } = require('../controllers/post');
const { create, list } = require('../controllers/post');
router.post('/post', create);


router.get('/posts', list);
module.exports = router;