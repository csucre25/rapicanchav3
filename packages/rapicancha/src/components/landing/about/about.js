import React from "react";
import './about.scss';
import titikTitik from '../../../images/titikTitik.png';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Login from "./login/login";

class About extends React.Component {
    render() {
        return (
            <>
             <section className="about" id="About__content">
                <div className="left">
                    <img className="tiktik" src={titikTitik} alt="" />
                    <img className="tiktik" src={titikTitik} alt="" />
                </div>
                <div className="rigth">
                    <h2>Bit about me</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
                        Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
                        Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                    <div className="btn">
                    <Link to={'/login'}>Buscar Cancha</Link>
                    </div>
  
                </div>
                 <section className="about" id="About__content">
                <div className="left">
                    <img className="tiktik" src={titikTitik} alt="" />
                    <img className="tiktik" src={titikTitik} alt="" />
                </div>
                <div className="rigth">
                    <h2>Bit about me</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
                        Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
                        Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                    <div className="btn">
                    <Link to={'/login'}>Buscar Cancha</Link>
                    </div>
  
                </div>
      
      
            </section>
                
            </section>
            </>
               
            


            
        );
    }
}

export default About;