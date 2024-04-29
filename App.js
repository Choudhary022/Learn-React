import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {

    return (
        <div className="header">

            <div className="logo">
                <img alt="error" src="https://logos-world.net/wp-content/uploads/2023/03/FoodPanda-Logo.png" />
            </div>


            <ul className="nav-item">

                <li>Home</li>
                <li>Contact Us</li>
                <li>About Us </li>

            </ul>

        </div>
    )
}


const AppLayout = () => {

    return (
        <div className="App-Layout">

            <Header />
        </div>
    )

}

const root = ReactDOM.createRoot(document.getElementById('demo'));
root.render(<AppLayout />);
