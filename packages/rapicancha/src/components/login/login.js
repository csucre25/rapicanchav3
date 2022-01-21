import React from "react";
import './login.scss';


class Login extends React.Component  {
    render() {return (
        <section className="about"  id="About__content">
            <div className="login">
                <div className="login-header">
                    <h1>Login</h1>
                </div>
                <div className="logo-f">
                    <img className="logo1" src={"https://images.vexels.com/media/users/3/137253/isolated/lists/90dd9f12fdd1eefb8c8976903944c026-logotipo-del-icono-de-facebook.png"} alt="50px"
     height="50px"></img>
     	<img src={"https://www.doplerweb.com/data/fotos/1022008841_1_twitter-bird-white-on-blue1.jpg"} alt="50" width="50"></img>
     </div>
     <div className="login-form">
         <h3>Username:</h3>
         <input type="text" placeholder="Username"/><br/>
         <h3>Password:</h3>
         <input type="password" placeholder="Password"/>
         <br/>
         <input type="button" value="Login" class="login-button"/>
         <br/>
         <h6 class="no-access">¿No tienes una cuenta?</h6>
         <input type="button" value="Registrarse" class="registrarse-button"/>
        </div>
    </div>
        </section>

    );
    }
}

export default Login;