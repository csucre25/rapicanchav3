import React from "react";
import './services.scss';
import laptop from '../../../images/laptop.png';

class Services extends React.Component  {
    render() {return (
        <section className="services">
            <h2>El mejor servicio</h2>
            <div className="items__one">
            <div className="services__item">
                <img src={laptop}alt=""/>
                <h3>Tecnologia actualizada</h3>
                <p>Nuestra aplicacion esta monitoreado con equipos tecnologicas de ultima generacion</p>
            </div>
            <div className="services__item">
                <img src={laptop}alt=""/>
                <h3>Tecnologia actualizada</h3>
                <p>Nuestra aplicacion esta monitoreado con equipos tecnologicas de ultima generacion</p>
            </div>
            <div className="services__item">
                <img src={laptop}alt=""/>
                <h3>Tecnologia actualizada</h3>
                <p>Nuestra aplicacion esta monitoreado con equipos tecnologicas de ultima generacion</p>
            </div>
            </div>
            <div className="items__two">
            <div className="services__item">
                <img src={laptop}alt=""/>
                <h3>Tecnologia actualizada</h3>
                <p>Nuestra aplicacion esta monitoreado con equipos tecnologicas de ultima generacion</p>
            </div>
            <div className="services__item">
                <img src={laptop}alt=""/>
                <h3>Tecnologia actualizada</h3>
                <p>Nuestra aplicacion esta monitoreado con equipos tecnologicas de ultima generacion</p>
            </div>
            <div className="services__item">
                <img src={laptop}alt=""/>
                <h3>Tecnologia actualizada</h3>
                <p>Nuestra aplicacion esta monitoreado con equipos tecnologicas de ultima generacion</p>
            </div>
            </div>
        </section>

    );
    }
}

export default Services;