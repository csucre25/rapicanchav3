import React, { useState } from 'react';
import '../login/login.scss';
const Login = () => {
    const [option, setOption] = useState('');
    const [displayP, setDisplayP] = useState('password');
    const [displayCP, setDisplayCP] = useState('password');
    const [iconP, setIconP] = useState('uil-eye-slash');
    const [iconCP, setIconCP] = useState('uil-eye-slash');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const toggleOption = () => {
        option === 'active' ? setOption('') : setOption('active')
    }
    const togglePassword = () => {
        displayP === 'password' ? setDisplayP('text') : setDisplayP('password')
        iconP === 'uil-eye-slash' ? setIconP('uil-eye') : setIconP('uil-eye-slash')
    }
    const toggleConfPassword = () => {
        displayCP === 'password' ? setDisplayCP('text') : setDisplayCP('password')
        iconCP === 'uil-eye-slash' ? setIconCP('uil-eye') : setIconCP('uil-eye-slash')
    }
    const validateForm = () => {
        return email.length > 0 && password.length > 0;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const credentials = { correo: email, password: password };
        fetch('http://localhost:3001/usuario/ingresar_usuario', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        })
            .then(response => response.json())
            .then(res => {
        });
    }
    return (
        <div className="container__body"><div className={`container__login ${option}`}>
            <div className="forms" >
                <div className="form login">
                    <span className="title">Rapicancha</span>
                    <form action="#">
                        <div className="input-field">
                            <input type="email" placeholder="Ingresa tu email" required onChange={e => setEmail(e.target.value)} />
                            <i className="uil uil-envelope"></i>
                        </div>
                        <div className="input-field">
                            <input type={displayP} className="password" placeholder="Ingresa tu contraseña" minLength="3"
                                required onChange={e => setPassword(e.target.value)} />
                            <i className="uil uil-lock icon" ></i>
                            <i className={`uil ${iconP} showHidePw`} onClick={() => togglePassword()}></i>
                        </div>
                        <div className="checkbox-text">
                            <div className="checkbox-content">
                                <input type="checkbox" id="logCheck" />
                                <label for="logCheck" className="text">Recuérdame</label>
                            </div>
                            <p class="forgot tab"><a class="a-login text-decoration-none" href="#forgot-pass">Olvidaste tu contraseña?</a></p>
                        </div>
                        <div className="input-field button">
                            <input type="button" value="Ingresar" onClick={handleSubmit} />
                        </div>
                    </form>
                    <div className="login-signup">
                        <span className="text">¿No tienes una cuenta?
                            <a href="#" className="text signup-link" onClick={() => toggleOption()}>Regístrate ahora</a>
                        </span>
                    </div>
                </div>
                <div className="form signup">
                    <span className="title">Registro</span>
                    <form action="#">
                        <div className="input-field">
                            <input type="text" placeholder="Ingresa tu nombre" required />
                            <i className="uil uil-user"></i>
                        </div>
                        <div className="input-field">
                            <input type="text" placeholder="Ingresa tus apellidos" required />
                            <i className="uil uil-user"></i>
                        </div>
                        <div className="input-field">
                            <input type="email" placeholder="Ingresa tu email" required />
                            <i className="uil uil-envelope"></i>
                        </div>
                        <div className="input-field">
                            <input type="password" placeholder="Crea una contraseña" required minLength="3" />
                            <i className="uil uil-lock icon"></i>
                        </div>
                        <div className="input-field">
                            <input type={displayCP} className="password" placeholder="Confirma tu contraseña" required />
                            <i className="uil uil-lock icon" ></i>
                            <i className={`uil ${iconCP} showHidePw`} onClick={() => toggleConfPassword()}></i>
                        </div>
                        <div className="checkbox-text">
                            <div className="checkbox-content">
                                <input type="checkbox" id="signCheck" />
                                <label for="signCheck" className="text">Acepto términos & condiciones</label>
                            </div>
                        </div>
                        <div className="input-field button">
                            <input type="button" value="Registrarme" />
                        </div>
                    </form>
                    <div className="login-signup">
                        <span className="text">¿Ya tienes una cuenta?
                            <a href="#" className="text login-link" onClick={() => toggleOption()}>Ingresa ahora</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
export default Login;