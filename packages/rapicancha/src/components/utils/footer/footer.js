import React from "react";
import './footer.scss';
import twitter from '../../../images/twitter.png';
import linkedin from '../../../images/linkedin.png';
import drible from '../../../images/drible.png';
import medium from '../../../images/medium.png';
import mail from '../../../images/mail.png';
class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="footer__left">
                        <h2>Respondemos a cualquier duda</h2>
                        <p>Dejanos un mensaje por nuestras redes sociales y numeros telefonicos, te respnderemos en cuanto podamos</p>
                    </div>
                    <div className="footer__right">
                        <ul>
                            <li><img src={twitter} alt="" /></li>
                            <li><img src={linkedin} alt="" /></li>
                            <li><img src={drible} alt="" /></li>
                            <li><img src={medium} alt="" /></li>
                            <li><img src={mail} alt="" /></li>
                        </ul>
                    </div>
                </div>
                <h5>Created by <span>TeamTwo</span> | All Reserved!</h5>
            </footer>
        );
    }
}
export default Footer;