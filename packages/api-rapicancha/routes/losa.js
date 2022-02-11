'use strict';

var express = require('express');
var router  = express.Router();
var controller = require('../controllers/losa');

router.post('/:manager', controller.manageLosa);
module.exports = router;