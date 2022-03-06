'use strict';

var express = require('express');
var router  = express.Router();
var controller = require('../controller/cLosa');

router.post('/:manager', controller.manageLosa);

module.exports = router;