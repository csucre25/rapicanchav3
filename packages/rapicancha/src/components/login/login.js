import React, { useState,useRef, useContext } from 'react';
import { Link} from 'react-router-dom';

import { AppContext } from '../application/provider';
import '../login/login.scss';

const Login = () => {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    // const { user, setUser } = useContext(UserContext);
   let email=useRef(null);
   let contraseña=useRef(null);

   const [state, setState] = useContext(AppContext);
    const validateForm = () => {
        return email.length > 0 && password.length > 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const credentials = { correo, password };
        fetch('http://localhost:3001/usuario/ingresar_usuario', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(credentials)
        })
          .then(response => response.json())
          .then(res => {
            setState(res.data);
          });
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
                <input type="text" className='email' placeholder="example@gmail.com" ref={email} onChange={() =>{setState({...state,correo:email.current.value})}} /><br /><br />
                <h2>Contraseña:</h2>
                <input type="password" className='password' placeholder="Contraseña" ref={contraseña} onChange={()=>{setState({...state,password:contraseña.current.value})}} />
                <br /><br />
                <p>validateForm: {validateForm()} {validateForm() ? 'It looks good!' : 'Please fill form'}</p>
                
                <div className="btn" >
                    <Link to={'/perfiljugador'} disabled={!validateForm()} onClick={handleSubmit} className='link'>Ingresar</Link>
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