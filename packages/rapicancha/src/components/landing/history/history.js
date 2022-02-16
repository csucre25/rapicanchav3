import React from "react";
import './history.scss';
import history from '../../../images/history.png';
import history2 from '../../../images/history2.png';
import history3 from '../../../images/history3.png';
import history4 from '../../../images/history4.png';
import history5 from '../../../images/history5.png';
import star from '../../../images/star.png';
import cubes from '../../../images/cubes.png';
import heart from '../../../images/heart.png';
import ball from '../../../images/ball.png';

class History extends React.Component  {
    render() {return (
        <section className="history" id="Portfolio__content">
          <div className="history__center">
            <div>
              <h2>Revise nuestras historias</h2>
              <p>Poque cada cliente es importante su valoracion de <br/> nuestro servicio</p>
            </div>
            <div className="images">
              <div>
                <img src={history} alt=""/>
                <img src={history2} alt=""/>
                <img src={history3} alt=""/>
              </div>
              <div>
                <img src={history4} alt=""/>
                <img src={history5} alt=""/>
                <img src={history} alt=""/>
              </div>
            </div>
          </div>
          <div className="awards">
            <div className="award">
                <img src={star} alt=""/>
              <h3>15 National <br/> <span>Awards</span></h3>
            </div>
            <div className="award">
                <img src={cubes} alt=""/>
              <h3>1500+ Happy <br/> <span>Customers</span></h3>
            </div>
            <div className="award">
                <img src={heart} alt=""/>
              <h3>2700+ Lovely <br/> <span>Feedbacks</span></h3>
            </div>
          </div>
                <img className="logo" src={ball} alt=""/>
        </section>

    );
    }
}

export default History;