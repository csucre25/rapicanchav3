'use strict';

//require('dotenv').config();

var models = require('../models');

exports.manageLosa = async(req, res) => {
    var manager = req.params.manager;
    switch (manager) {
        case 'registrar_losa':
            return registerLosa(req, res);
        case 'listar_losa':
            return getPersonas(req, res);
        case 'actualizar_losa':
            return updatePersona(req, res);
        case 'eliminar_losa':
            return deletePersona(req, res);
        default:
            return res.status(404).send("option not found");
    }
};

var registerLosa = async(req, res) => {

    let body = req.body;
    let usuario_id = 0;
    let losa_id = 0;
    let data_losa = {
        descripcion: body.descripcion,
        direccion: body.direccion,
        responsable_id: body.responsable_id,
        fecha_registro: body.fecha
    }

    return res.status(200).json({ respuesta: "Creacion exitosa", controlador: "Losa", operacion: "registrar_losa", registro: losaObject });
};

var getPersonas = async(req, res) => {
    await models.persona.findAll({
        where: {
            estado: '1',
        }
    }).then((persona) => {
        return res.status(200).json(persona);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}

var updatePersona = async(req, res) => {
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
    await models.sequelize.transaction(async(t) => {
        let personaObject = await models.persona.requestFindById(t, _persona_id)
        if (personaObject.hasOwnProperty('error_id')) {
            return res.status(500).json("error ha implementar");
        }
        let personaUpdate = await models.persona.requestUpdate(t, personaObject, data_persona)
        if (personaUpdate.hasOwnProperty('error_id')) {
            return res.status(500).json("error ha implementar");
        }
        return res.status(200).json({ respuesta: "Actualizacion exitosa", controlador: "persona", operacion: "updatePersona", registro: personaUpdate });
    });
};

var deletePersona = async(req, res) => {
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