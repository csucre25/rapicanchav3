'use strict';
const Joi = require('joi');
const Usuario = require('../model/mUsuario');

exports.manageUsuario = async(req, res) => {
    let manager = req.params.manager;
    switch (manager) {
        case 'registrar_usuario':
            return registerUsuario(req, res);
        case 'listar_usuario':
            return listUsuario(req, res);
        case 'actualizar_usuario':
            return updateUsuario(req, res);
        case 'eliminar_usuario':
            return deleteUsuario(req, res);
        case 'ingresar_usuario':
            return loginUsuario(req, res);
        case 'obtener_usuario':
            return getUsuario(req, res);
        default:
            return res.status(404).json({respuesta:"option not found"});
    }
};

let registerUsuario = async(req, res) => {
    let body = req.body;
    let params = req.params;
    let usuario_id = 0;
    let losa_id = 0;
    let data_losa = {
        descripcion: body.descripcion,
        direccion: body.direccion,
        responsable_id: body.responsable_id,
        fecha_registro: body.fecha
    }

    return res.status(200).json({ respuesta: "Creacion exitosa", controlador: "Usuario", operacion: "registrar_usuario", registro: losaObject });
};

var listUsuario = async(req, res) => {
    return res.status(200).json({ respuesta: "Listado exitosa", controlador: "Usuario", operacion: "registrar_usuario", registro: losaObject });
    /*await models.persona.findAll({
        where: {
            estado: '1',
        }
    }).then((persona) => {
        return res.status(200).json(persona);
    }).catch((error) => {
        return res.status(500).json(error);
    });*/
}

let updateUsuario = async(req, res) => {
    let body = req.body;
    let usuario_id = 0;
    let _persona_id = body.persona_id;
    let data_persona = {
        nombres: body.nombres,
        a_paterno: body.a_paterno,
        a_materno: body.a_materno,
        dni: body.dni,
        fecha_nacimiento: body.fecha,
        edad: body.edad,
        direccion: body.direccion,
        ubigeo_id: body.ubigeo_id,
    }
};

let deleteUsuario = async(req, res) => {
    let body = req.body;
    let _persona_id = body.persona_id;
    await models.sequelize.transaction(async(t) => {
        let personaObject = await models.persona.requestFindById(t, _persona_id)
        if (personaObject.hasOwnProperty('error_id')) {
            return res.status(500).json("error ha implementar");
        }
        let personaUpdate = await models.persona.requestDelete(t, personaObject)
        if (personaUpdate.hasOwnProperty('error_id')) {
            return res.status(500).json("error ha implementar");
        }
        let usuarioObject = await models.usuario.requestFindOne(t, { persona_id: _persona_id })
        if (usuarioObject.hasOwnProperty('error_id')) {
            return res.status(500).json("error ha implementar");
        }
        let usuarioUpdate = await models.usuario.requestDelete(t, usuarioObject)
        if (usuarioUpdate.hasOwnProperty('error_id')) {
            return res.status(500).json("error ha implementar");
        }
        return res.status(200).json({ respuesta: "Eliminacion exitosa", controlador: "persona", operacion: "deletePersona", registro: personaUpdate });
    });
};

let getUsuario = async(req, res) => {
    let manager = req.params.manager;
    let body = req.body;
    let usuario ={
        nombre:body.nombre,
        apellidoP: body.apellidoP,
        apellidoM: body.apellidoM,
        password: body.password,
        repeat_password: body.password,
        correo: body.correo
    }
    try {
        const value = await schema.validateAsync(usuario);
        const usuarios = await Usuario.find();
        console.log(usuarios);
        return res.status(200).json({ respuesta: "Creacion exitosa", controlador: "Usuario", operacion: manager, usuarios: usuarios });
    }
    catch (err) {
        return res.status(400).json({ respuesta: "Error", controlador: "Usuario", operacion: manager, error: err });
    }
    
    
};

const schema = Joi.object({
    nombre: Joi.string()
        .min(3)
        .max(50)
        .required(),
    apellidoP: Joi.string()
        .min(3)
        .max(50)
        .required(),
    apellidoM: Joi.string()
        .min(3)
        .max(50)
        .required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    repeat_password: Joi.ref('password'),
    /*access_token: [
        Joi.string(),
        Joi.number()
    ],*/
    correo: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required()
})
.with('correo','nombre')
//.xor('password','access_token')
.with('password','repeat_password');