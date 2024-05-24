import { APP_LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-between
         items-center shadow-lg px-2 mb-5">
            <div>
                <Link to="/"> <img alt="error" className="w-28 mb-2" src={APP_LOGO_URL} /></Link>
            </div>
            <ul className="flex space-x-10">
                <li> <Link to="/"> Home</Link></li>
                <li> <Link to="/contact-us">Contact Us</Link></li>
                <li> <Link to="/about">About Us </Link></li>
                <li> <Link to="/grocery">Grocery</Link></li>
            </ul>
        </div>
    )
}

export default Header;