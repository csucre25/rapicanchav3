import React from "react";
import './header.scss';
import ball from '../../../images/ball.png';
import Navbar from "../navbar/navbar";
import {Link} from 'react-router-dom';


class Header extends React.Component {
  //<a href="#">Buscar Cancha</a>
  render() {
    const company = this.props.company;
    const routes = this.props.routes;
    return (
        <div>
              <nav className="navigation">
                <div className="logo">
                    <img src={ball} alt="logo" className="logo"/>
                    <span>{company}</span>
                </div>                
                <Navbar routes={routes} />
                <div className="btn">
                  <Link to={'/login'}>Buscar Cancha</Link>
                    
                </div>
            </nav>
        </div>
    );
  }
}

export default Header;