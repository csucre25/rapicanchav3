import React from "react";
import { Link } from 'react-router-dom';
const perfilDueño =() => {
        return(
            <div className="perfil-dueño">
                   <div className="header-dueño">
                       <div className="imagenperfil"><img src='#' alt="50px"/></div>
                       <h1>Bienvenido Señor Juan</h1>
                   </div>
                   <h2>¿ Que quiere hacer hoy dia?</h2>
                   <div className="body-dueño">
                   <div className="btn-dueño">
                    <Link to={'/crudcanchas'}>Agregar nuevas Lozas</Link>
                    </div>     
                    <div className="btn-dueño">
                    <Link to={'/listarlozas'}>Mis Lozas</Link>
                    </div> 
                    <div className="btn-dueño">
                    <Link to={'/updateperfil'}>Modificar Perfil</Link>
                    </div>  
                    <div className="btn-dueño">
                    <Link to={'/listaclientes'}>Ver Clientes</Link>
                    </div> 

                   </div>
                   <button className="btn-dueño-salir">Salir</button>
   
               </div>
          
       );

}


export default perfilDueño;