'use strict';
const mongoose = require("mongoose");

const usuarioSchema = mongoose.Schema({
    _id: String,
    correo: String,
    passw: String,
    nombre: String,
    apellidoP: String,
    apellidoM: String,
    telefono: String
});
    
const UsuarioModel = mongoose.model('usuarios', usuarioSchema);

module.exports = UsuarioModel;

