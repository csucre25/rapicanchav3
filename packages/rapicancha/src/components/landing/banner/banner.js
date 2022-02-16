import React from "react";
import './banner.scss';
import character from '../../../images/character.png';

class Banner extends React.Component  {
    render() {return (
        <section className="hero">
            <div className="top">
            <div className="left">
                <h2>¿ Quieres jugar una pichanguita con tus patas y no reservaron una cancha ?</h2>
            </div>
            <div className="right">
                <img src={character} alt=""/>
                <span>pelotero</span>
            </div>
            </div>
            <div className="bottom">
                <h1>RAPICANCHA</h1>
                <span>
                    Reserva tus losas deportivas de manera rapida y segura sin llamadas , con tan solo un click puedes reservar
                    la loza de tu preferencia y cercana al lugar donde te encuentres.
                </span>
            </div>
        </section>

    );
    }
}

export default Banner;