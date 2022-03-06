'use strict';
const mongoose = require('mongoose');
const url = 'mongodb://localhost/rapicancha';
mongoose.connect(url,{})
.then(()=>console.log('Connection to DB success'))
.catch((err)=>console.log('Error Message: '+err))

//require('dotenv').config()
/*const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mySchema = Schema({ name: String });
const uri = 'mongodb://localhost/mongoose-shared-connection';
global.db = mongoose.createConnection(uri);

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'devel_local';
const config = require(path.join('..','config','config.json'))[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  // sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS,{
  //   host: process.env.DB_HOST,
  //   dialect: process.env.DB_DIALECT,
  // });
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;*/
