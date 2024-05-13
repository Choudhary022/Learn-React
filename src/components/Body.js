import { useEffect, useState } from "react";

import { SWIGGY_API_URL } from "../utils/constants";

import RestaurantCard from "./RestaurantCard";
import SkeltonCard from "./SkeltenCard";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(SWIGGY_API_URL);
        const json = await data.json();
        // console.log(
        //   "json format  : ",
        //   json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        //     .restaurants
        // );
        setRestaurants(
          json.data.success.cards[1].card.card.gridElements.infoWithStyle
            .restaurants
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="body">
      {restaurants.length == 0 ? (
        <SkeltonCard />
      ) : (
        <>
          <div className="search">
            <input placeholder="search " />
          </div>
          <div className="restaurant-container">
            {restaurants.map((res) => (
              <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
                <RestaurantCard restaurant={res.info} />
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Body;