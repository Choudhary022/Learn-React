import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {

    return (
        <div className="header">

            <div >
                <img alt="error" className="logo" src="https://logos-world.net/wp-content/uploads/2023/03/FoodPanda-Logo.png" />
            </div>

            <ul className="nav-item">

                <li>Home</li>
                <li>Contact Us</li>
                <li>About Us </li>

            </ul>

        </div>
    )
}


const CardsList = [{
    restaurantName: "Chotu's The Food People",
    type: "North Indian, Chinese, Biryani",
    address: "Ghansi Bazaar, Hyderabad",
    img: "https://b.zmtcdn.com/data/pictures/chains/9/93739/fc0cf5f469a0b7ad3689072652afa20e_o2_featured_v2.jpg",
    rating: 3.9
},
{
    restaurantName: "New King Safina Hotel",
    type: "Mughlai, Biryani, North Indian",
    address: "Charminar, Hyderabad",
    img: "https://b.zmtcdn.com/data/pictures/9/95549/f12e393585d603571be433949aa776fe.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    rating: 3.8
},
{
    restaurantName: "Pista House Bakery",
    type: "Bakery, Desserts, Shawarma, Sandwich, Pizza, Fast Food, Salad, Beverages",
    address: "Charminar, Hyderabad",
    img: "https://b.zmtcdn.com/data/pictures/chains/8/19937288/b8f98cd0239c1792920ffd087a83f9fa_o2_featured_v2.jpg",
    rating: 4.3
},
{
    restaurantName: "Hotel Shadab",
    type: "North Indian, Mughlai, Kebab, Chinese, Biryani, Fast Food, Beverages",
    address: "Ghansi Bazaar, Hyderabad",
    img: "https://b.zmtcdn.com/data/pictures/chains/1/91711/f3704598c336542166b781026fc5ad4b_o2_featured_v2.jpg",
    rating: 4.3
},
{
    restaurantName: "MS Mandi & Shawarma",
    type: "North Indian, Mandi, Fast Food, Pizza, Shawarma, Burger, Shake, Beverages",
    address: "charminar Hyderabad",
    img: "https://b.zmtcdn.com/data/pictures/1/19497661/f3e30f26bacec0c1792418bd23df5759_o2_featured_v2.jpg",
    rating: 3.8
},
{
    restaurantName: "KFC",
    type: "Burger, Fast Food, Biryani, Desserts, Beverages",
    address: "Abids, Hyderabad",
    img: "https://b.zmtcdn.com/data/pictures/chains/5/90195/3b4d0d9afcd01700cbb5d580cf43fd92_o2_featured_v2.jpg",
    rating: 3.9
},
{
    restaurantName: "Scoops Ice Cream",
    type: "Ice Cream, Desserts, Pizza",
    address: "Charminar, Hyderabad",
    img: "https://b.zmtcdn.com/data/pictures/chains/9/91559/1ea696d2e09e937df6840d5c6e76637e_o2_featured_v2.jpg",
    rating: 4.0
},
{
    restaurantName: "McDonald's",
    type: "Burger, Fast Food, Beverages",
    address: "MPM Mall, Abids, Hyderabad",
    img: "https://b.zmtcdn.com/data/pictures/4/19026144/92237989e8a919c0fcfdf3d9f8da3fb0_o2_featured_v2.jpg",
    rating: 4.5
},
{
    restaurantName: "Nizams Khana Ghar",
    type: "South Indian, Chinese, Street Food",
    address: "Falaknuma, Hyderabad",
    img: "https://b.zmtcdn.com/data/pictures/6/19903636/27b4443f3be7cd8b270f29cd40467c37_o2_featured_v2.jpg",
    rating: 4.1
},
{
    restaurantName: "Karachi Bakery",
    type: "Bakery, Chinese, Pizza, Sandwich, Italian, Wraps, Street Food, Fast Food",
    address: "Nampally, Hyderabad",
    img: "https://b.zmtcdn.com/data/pictures/3/20530203/4e385a41570e65393acd7ed2b0229ff6_o2_featured_v2.jpg",
    rating: 4.0
},

];


const RestaurantCard = () => {

    return (<div className="res-Container">

        <div className="res-card">

            <img className="res-logo" alt="no image" src="https://b.zmtcdn.com/data/pictures/chains/7/90517/f880231116d2f74b1a9251eecae2d763_o2_featured_v2.jpg" />

            <div className="res-description">
                <div>Shah Ghouse Hotel & Restaurant</div>
                <div>4.2</div>
            </div>
            <div>30 minutes</div>

        </div>

    </div>)
}

const Body = () => {

    return (<div className="body">
        <div className="search">
            <input placeholder="search " />
        </div>

        <div className="restaurant-container">
            <RestaurantCard />

        </div>

    </div>)
}


const AppLayout = () => {

    return (
        <div className="App-Layout">
            <Header />
            <Body />
        </div>
    )

}

const root = ReactDOM.createRoot(document.getElementById('demo'));
root.render(<AppLayout />);
