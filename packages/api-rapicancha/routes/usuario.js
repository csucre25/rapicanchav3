'use strict';

var express = require('express');
var router  = express.Router();
var controller = require('../controllers/cUsuario');

router.post('/:manager', controller.manageLosa);
module.exports = router;