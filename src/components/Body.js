import { useEffect, useState } from "react";

import { SWIGGY_API_URL } from "../utils/constants";

import RestaurantCard from "./RestaurantCard";
import SkeltonCard from "./SkeltenCard";



const Body = () => {

  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const data = await fetch(SWIGGY_API_URL);
        const json = await data.json();
        console.log("json format  : ", json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants);
        setRestaurants(json.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        setFilteredRestaurant(json.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, [])
  
  useEffect(()=>{
    if(searchText.length==0)
      {
        setFilteredRestaurant(restaurants);
      }
  },[searchText])



  const handleSearchRestaurant = () => {
    const res = restaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase()))
    setFilteredRestaurant(res);
  }


  return (
    <div className="body">

      {restaurants.length == 0 ? <div className="skelton-container">
        <SkeltonCard />
        <SkeltonCard />
        <SkeltonCard />
        <SkeltonCard />
        <SkeltonCard />
        <SkeltonCard />
        <SkeltonCard />
        <SkeltonCard />
        <SkeltonCard />
        <SkeltonCard />
        <SkeltonCard />
        <SkeltonCard />
        <SkeltonCard />
        <SkeltonCard />
        <SkeltonCard />
        <SkeltonCard />

      </div> : <>
        <div className="search-container">
          <input
            placeholder="search"
            type="text"
            value={searchText}
            onChange={(a) => { setSearchText(a.target.value) }}
          />
          <button onClick={handleSearchRestaurant}>Search</button>
        </div>

        <div className="restaurant-container">
          {filteredRestaurant.map((res) => (
            <RestaurantCard restaurant={res.info} key={res.info.id} />
          ))}
        </div>

      </>}
    </div>
  );
}

export default Body;