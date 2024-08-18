import './Footer.css';
import logo1 from '../assets/github.png';
import logo2 from '../assets/linkden.png';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className='footer-container'>
            <p>Made By Mukul Rajput</p>
            <div className='foot-soc'>
                <Link to='https://github.com/imukulrajput' target='_blank'>
                    <img className='foot-logo' src={logo1} alt='github-logo' />
                </Link>
                <Link to='https://www.linkedin.com/in/imukulrajput1430' target='_blank'>
                    <img className='foot-logo' src={logo2} alt='linkedIn-Logo' />
                </Link>
            </div>
        </div>
    );
}
