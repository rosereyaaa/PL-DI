const express = require('express');

const router = express.Router();

// import controller methods

// const { create } = require('../controllers/post');
const { create, list, read } = require('../controllers/post');
router.post('/post', create);


router.get('/posts', list);
router.get('/post/:slug', read);
module.exports = router;