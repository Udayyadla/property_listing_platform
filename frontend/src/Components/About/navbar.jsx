import { Link } from 'react-router-dom';
import "../../Styles/About/navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch ,faHeart} from '@fortawesome/free-solid-svg-icons';
import logo1 from '../../assets/Properties_assets/logo1.jpg';


export const Navbar=()=>{
    return(
        <div className="navbar">
            <div className="logo">
                <img src={logo1} alt="logo"/>
            </div>
            <div className="nav-middle">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/hero">Properties</Link>
            </div>
            <div className="nav-icons">
            {/* <FontAwesomeIcon icon={faSearch} /> */}
            <Link to="/searchForm">
                <FontAwesomeIcon icon={faSearch} className='Nav-search-icon' />
            </Link>
            <Link to="/Navfavourite">
                <FontAwesomeIcon icon={faHeart} className='Nav-favourite-icon' />
            </Link>
            </div>
       </div>
    )
}