 import { Link } from 'react-router-dom';
import "../../Styles/About/navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/Properties_assets/logo.jpg';

export const Navbar=()=>{
    return(
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="nav-middle">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/hero">Properties</Link>  
            </div>
            <div className="nav-icons">
            <FontAwesomeIcon icon={faSearch} />
            </div>
       </div>
    )
}