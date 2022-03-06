'use strict';

var express = require('express');
var router  = express.Router();
var controller = require('../controller/cUsuario');

/*router.post('/:manager', (req, res) => {
    return res.status(200).json({ respuesta: "Creacion exitosa", controlador: "Losa", operacion: "registrar_losa" });
});*/
router.post('/:manager', controller.manageUsuario);
module.exports = router;