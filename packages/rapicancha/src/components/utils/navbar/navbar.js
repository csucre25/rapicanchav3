import React from "react";
import './navbar.scss';

class Navbar extends React.Component {
  render() {
    const routes = this.props.routes;
    return (
        <ul className="list">
          { routes.map((route, index) => (
            <li key={index} className="item__list">
              <a href={route.url}>
                {route.name}
              </a>
            </li>
          )) }
        </ul>
    );
  }
}

export default Navbar;