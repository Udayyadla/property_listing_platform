import "../../Styles/About/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/Properties_assets/logo.jpg';
export const Footer=()=>{
    return (
        <footer className="footer">
        <div className="footer-container">
            <div className="footer-left">
                <img src={logo} alt="logo" className="footer-logo" />
            </div>
            <div className="footer-middle">
                <h3>About Us</h3>
                <p>At Real Estate, we pride ourselves on being a trusted and reputable name in the real estate industry with years of experience.</p>
            </div>
            <div className="footer-right">
                <h3>Contact Info</h3>
                <p>13, Fifth Avenue, New York, NY 101660</p>
                <p>Email: contact@info.com</p>
                <p>Phone: 555-345-4599</p>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2024 Real Estate. All Rights Reserved.</p>
            <div className="social-icons">
                    <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
        </div>
    </footer>
    );
}