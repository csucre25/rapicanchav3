import React, { useContext } from "react";
import './perfil.scss';
import { Link } from 'react-router-dom';
import { AppContext } from "../../components/application/provider";
const PerfilJugador = () => {

    const [state, setState] = useContext(AppContext);

    return (
        <div className="jugador">
            <div className="perfil-jugador">
                <div className="imagenperfil">
                    <img className="foto-jugador" src="https://cdn.pixabay.com/photo/2014/04/02/16/17/ball-306820_960_720.png" alt="10px" height="80px"></img>
                    <h2>Bienvenido : </h2>
                    <p>{state.correo}</p>
                </div>
                <div className="btn">Modificar Perfil</div>

            </div>
            <div className="buscar-cancha">
                <h1>Busqueda de Canchas deportivas</h1>
                <div className="perfil-body">
                    <p>Para empezar la busqueda de canchas cercanas a su ubicacion, por favor encienda la aplicacion de Ubicacion de su celular o dispositivo que este usando</p>
                    <input type="text" placeholder="Registrar Ubicacion Actual" />
                    <button className="buscar-btn">Buscar</button>
                </div>
                <button className="btn-salir">Salir</button>

            </div>
        </div>


    );

}


export default PerfilJugador;