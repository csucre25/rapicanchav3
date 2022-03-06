const express = require('express');
const router = express.Router();
const app = express();
const PORT = 3001;
const bodyParser = require('body-parser');
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

app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
app.use('/losa', losa);
//app.use('/usuario', usuario);
app.use('/usuario', usuario);
/*router.use(bodyParser.urlencoded({ extended: false }));*/

/*router.post('/usuario',function(req,res){
   var username = req.body.username;
   var htmlData = 'Hello:' + username;
   res.send(htmlData);
   console.log(htmlData);
});*/
/*app.get('/usuario', (req, res) => {
  return res.status(200).json({ respuesta: "Creacion exitosa", controlador: "Losa", operacion: "registrar_losa" });
});*/
//Export functions to use in firebase
//exports.app = functions.https.onRequest(app);
app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
  });