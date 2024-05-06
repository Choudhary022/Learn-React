import { useEffect } from "react";

import { SWIGGY_API_URL } from "../utils/constants";

import RestaurantCard from "./RestaurantCard";
import RESTAURANT_LIST from "../utils/mockData";


const Body = () => {


  useEffect(() => {

    const fetchData = async () => {
      try {
        const cros=require('cors');
        const data = await fetch(SWIGGY_API_URL, );
        const json = await data.json();
        console.log("json format  : ", json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, [])

  return (
    <div className="body">
      <div className="search">
        <input placeholder="search " />
      </div>

      <div className="restaurant-container">
        {RESTAURANT_LIST.map((res) => (
          <RestaurantCard restaurant={res} key={res.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
