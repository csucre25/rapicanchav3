'use strict';
const {  Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.usuario,{foreignKey:'persona_id'});
      this.belongsTo(models.ubigeo,{foreignKey:'ubigeo_id'});
    }

    static async requestFindById(t,id){
      return persona.findOne({
          where:{
              persona_id: id
          }
      },{transaction: t}).then((persona)=>{
        if (!persona) {
          //errores= "No se encontro personal. ";
          t.rollback();
          return {
            "error_id":"record_not_found",
            "model":"persona",
            "id":String(id)
          }
        }
        return persona
      });
    };
    static async requestFindOne(t,where,fields){
      return persona.findOne({
          where:where
      },{transaction: t}).then((persona)=>{
        if (!persona) {
          //errores= "No se encontro personal. ";
          t.rollback();
          return {
            "error_id":"record_not_found",
            "model":"persona",
            "id":"undefined"
          }
        }
        return persona
      });
    };
    static async requestUpdate(t,personaUpdate,data){
        return personaUpdate.update(
            data
        ,{transaction:t}).then((persona)=>{
          if (!persona) {
              errores="No se actualizó persona";
              t.rollback();
              return  {
                "error_id":"record_not_updated",
                "model":"persona",
                "id": String(personaUpdate.persona_id)
              }
              //res.status(500).json(errores);
          }
          return persona;
        });
    };
    static async requestCreate(t,data){
        //return data;
        return persona.create(
          data
        ,{transaction: t}).then((persona)=>{
              if (!persona) {
                  t.rollback();
                  return {
                  "error_id":"record_not_created",
                  "model": "persona"
                }
              }
              return persona
        });
    };
    static async requestDelete(t,personaDelete){
        return personaDelete.update({
            estado:"0",
        },{transaction:t}).then((persona)=>{
          if (!persona) {
              //errores="No se eliminó. ";
              t.rollback();
              return {
                "error_id":"record_not_deleted",
                "model":"personal",
                "id":String(personaDelete.persona_id)
              }
          }
          return true
        });
    };
  }
  persona.init({
    persona_id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombres: {
      allowNull:false,
      type: DataTypes.STRING(100)
    },
    a_paterno: {
      allowNull:false,
      type: DataTypes.STRING(50)
    },
    a_materno: {
      allowNull:false,
      type: DataTypes.STRING(50)
    },
    dni: {
      allowNull:false,
      type: DataTypes.STRING(15)
    },
    fecha_nacimiento: {
      allowNull:false,
      type: DataTypes.DATE
    },
    edad: {
      allowNull:false,
      type: DataTypes.INTEGER
    },
    direccion: {
      allowNull:false,
      type: DataTypes.STRING(200)
    },
    estado: {
      allowNull:false,
      type: DataTypes.BOOLEAN,
      defaultValue:'1'
    },
    ubigeo_id:{
      type:DataTypes.INTEGER,
      allowNull:false,
    }
  }, {
    sequelize,
    tableName: 'persona',
    modelName: 'persona',
    timestamps: true,
  });
  return persona;
};