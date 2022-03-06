import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
//import { UserContext } from '../App';
import '../login/login.scss';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const { user, setUser } = useContext(UserContext);
    const validateForm = () => {
        return email.length > 0 && password.length > 0;
    }
    return (
        <div className='login'>
            <div className="login-form1">
                <div className="login-header">
                    <h1>Iniciar Sesion</h1>
                </div>
                <div className="logo-f">
                    <img src={"https://images.vexels.com/media/users/3/137253/isolated/lists/90dd9f12fdd1eefb8c8976903944c026-logotipo-del-icono-de-facebook.png"} alt="50px"
                        height="50px"></img>
                    <img src={"https://www.doplerweb.com/data/fotos/1022008841_1_twitter-bird-white-on-blue1.jpg"} alt="50" width="50"></img>
                </div><br />

                <h2 class="forgot-password">o ingresa con tu email</h2>
                <input type="text" className='email' placeholder="example@gmail.com" required
                    onChange={e => setEmail(e.target.value)}
                /><br /><br />
                <h2>Contraseña:</h2>
                <input type="text" className='password' placeholder="Contraseña" required
                    onChange={e => setPassword(e.target.value)} />
                <br /><br />
                <p>validateForm: {validateForm()} {validateForm() ? 'It looks good!' : 'Please fill form'}</p>
                
                <div className="btn" >
                    <Link to={'/usuario'} disabled={!validateForm()} className='link'>Ingresar</Link>
                </div>
                <br />
                <h4 class="no-access">¿No tienes una cuenta?</h4>
                <div className="btn">
                    <Link to={'/sing'} className='link'>Registrase</Link>
                </div>
                <br />
                <h4 class="no-access">¿Olvidaste tu contraseña?</h4>
                <div className="btn">
                    <Link to={'/recuperar'} className='link'>Recuperar</Link>
                </div>
                <br />

            </div>
        </div>

    );

}


export default Login;