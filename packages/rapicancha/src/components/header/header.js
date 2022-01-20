import React from "react";
import './header.scss';
import ball from '../../images/ball.png';
import Navbar from "../navbar/navbar";

class Header extends React.Component {
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
                    <a href="#">Buscar Cancha</a>
                </div>
            </nav>
        </div>
    );
  }
}

export default Header;