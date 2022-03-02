import React from "react";
import { Link } from 'react-router-dom';
const login =() => {
        return(

            <div className="login-form">
                   <div className="login-header">
                       <h1>Iniciar</h1>
                   </div>
                   <div className="logo-f">
                       <img className="logo1" src={"https://images.vexels.com/media/users/3/137253/isolated/lists/90dd9f12fdd1eefb8c8976903944c026-logotipo-del-icono-de-facebook.png"} alt="50px"
                           height="50px"></img>
                       <img src={"https://www.doplerweb.com/data/fotos/1022008841_1_twitter-bird-white-on-blue1.jpg"} alt="50" width="50"></img>
                   </div><br/>
                   <h2 class="forgot-password">o ingresa con tu email</h2>
                   <input type="text" placeholder="example@gmail.com" /><br /><br/>
                   <h2>Contraseña:</h2>
                   <input type="password" placeholder="Contraseña" />
                   <br/><br/>
                   <div className="btn">
                    <Link to={'/usuario'}>Ingresar</Link>
                    </div>
                   <br />
                   <h4 class="no-access">¿No tienes una cuenta?</h4>
                   <div className="btn">
                    <Link to={'/sing'}>Registrase</Link>
                    </div> 
                   <br />
                   <h4 class="no-access">¿Olvidaste tu contraseña?</h4>
                   <div className="btn">
                    <Link to={'/recuperar'}>Recuperar</Link>
                    </div>
                   <br />
   
               </div>
          
       );

}


export default login;