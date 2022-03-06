import React from "react";
import './sing.scss';
import { Link } from 'react-router-dom';

class Sing extends React.Component {

    render() {

        return (
            <div className="sing-form">
                <div className="sing-header">
                    <h1>Registrarse</h1>
                </div>
                <div className="logo-s">
                    <img className="logo1" src={"https://images.vexels.com/media/users/3/137253/isolated/lists/90dd9f12fdd1eefb8c8976903944c026-logotipo-del-icono-de-facebook.png"} alt="50px"
                        height="50px"></img>
                    <img src={"https://www.doplerweb.com/data/fotos/1022008841_1_twitter-bird-white-on-blue1.jpg"} alt="50" width="50"></img>
                </div>
                <br />
                <h2 class="letra">o registrese con su email</h2>
                <div className="info-usuario">
                    <div >
                        <h3 class="derecha_info">Correo electronico</h3><br />
                        <h3 class="derecha_info">Nombre</h3><br />
                        <h3 class="derecha_info">Apellidos</h3><br />
                        <h3 class="derecha_info">Nro de Celular</h3><br />
                        <h3 class="derecha_info">Contraseña</h3><br />
                        <h3 class="derecha_info">Repita contraseña</h3>
                    </div>
                    <div>
                        <input type="text" placeholder="example@gmail.com" /><br/>
                        <input type="text" placeholder="Juan Antonio" /><br />
                        <input type="text" placeholder="Del Solar" /><br />
                        <input type="text" placeholder="999 999 999" /><br />
                        <input type="password" placeholder="Contraseña" />
                        <br />
                        <input type="text" placeholder="Contraseña" /><br />
                    </div>

                </div>
                <input type="button" value="Registrarse" class="registrase-button" />
                <br />
                <h4 class="no-access">¿Ya tiene una cuenta?</h4>
                <div className="btn-d">
                    <Link to={'/login'} className='link'>Ingresar</Link>
                </div>
                <br />

            </div>


        );
    }
}

export default Sing;