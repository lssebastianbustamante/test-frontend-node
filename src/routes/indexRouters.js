const express = require('express');
const router = express.Router();
const path = require('path');

const indexController = require(path.resolve(__dirname, '..', 'controllers', 'indexController'));

router.get('/', indexController.index);

module.exports = router;