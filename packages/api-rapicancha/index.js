const express = require('express');
const app = express();

//const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());

// se usa para obtener los objetos que recibimos como formato json dentro de las variables req (en llamadas POST,PUT)  y se puede ver con req.body
//app.use(bodyParser.json()); 
//no recuerdo para que era pero parece importante xd
//app.use(bodyParser.urlencoded({ extended: true })); 

//var models = require('./models');
//rutas

var losa = require('./routes/losa'); 
var usuario = require('./routes/usuario'); 


app.use('/losa', losa);
//app.use('/usuario', usuario);
//Export functions to use in firebase
//exports.app = functions.https.onRequest(app);
app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
  });