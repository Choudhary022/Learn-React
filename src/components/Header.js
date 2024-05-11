import { APP_LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div >
                <Link to="/"> <img alt="error" className="logo" src={APP_LOGO_URL} /></Link>
            </div>
            <ul className="nav-item">
                <li> <Link to="/"> Home</Link></li>
                <li> <Link to="/contact-us">Contact Us</Link></li>
                <li> <Link to="/about">About Us </Link></li>
                
            </ul>
        </div>
    )
}


export default Header;