import React,{useEffect, useState} from "react";
import './perfil.scss';
import { Link } from 'react-router-dom';
const perfilJugador =() => {
    
    //const [jugador ,setJugador]=useState([]);
    //const credentials ={nombre,correo,apellidoP, apellidoM, telefono};
    /*const url='http://localhost:3000/usuario/obtener_usuario';
    fetch(url, {
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(credentials)
    })
    .then(response => response.json())
    .then( res => {
        setJugador(res.data);
    });*/

        return(
            <div className="jugador">
                   <div className="perfil-header">
                       <div className="imagenperfil"><p>nombre</p><p>apellidoP</p></div>
                       <div className="btn">Modificar Perfil</div>            
                   </div>
                   <h1>Busqueda de Canchas deportivas</h1>
                   <div className="perfil-body">
                       <p>Para empezar la busqueda de canchas cercanas a su ubicacion, por favor encienda la aplicacion de Ubicacion de su celular o dispositivo que este usando</p>
                       <input type="ubicacion" placeholder="Registrar Ubicacion Actual" />
                       <button>Buscar</button>
                   </div>
                   <button className="btn-salir">Salir</button>
   
               </div>
          
       );

}


export default perfilJugador;