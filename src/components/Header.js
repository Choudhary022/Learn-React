import { APP_LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
        <div className="header">
            <div >
                <img alt="error" className="logo" src={APP_LOGO_URL} />
            </div>
            <ul className="nav-item">
                <li>Home</li>
                <li>Contact Us</li>
                <li>About Us </li>

            </ul>
        </div>
    )
}


export default Header;