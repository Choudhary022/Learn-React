import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { SWIGGY_API_URL } from "../utils/constants";

import RestaurantCard from "./RestaurantCard";
import SkeltonCard from "./SkeltenCard";

const Body = () => {

  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(SWIGGY_API_URL);
        const json = await data.json();
        setRestaurants(
          json.data.success.cards[1].card.card.gridElements.infoWithStyle
            .restaurants
        );
        setFilteredRestaurant(json.data.success.cards[1].card.card.gridElements.infoWithStyle
          .restaurants);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const handleSearchRestaurant = () => {
    let filteredRes = restaurants.filter(res => res.info.name
      .toLowerCase().includes(searchRestaurant.toLocaleLowerCase()));
    setFilteredRestaurant(filteredRes);
  }

  /**
   * @returns restaurant who has more than 4 rating
   */
  const handleTopRatedRestaurant = () => {
    let filteredRes = restaurants.filter(res => res.info.avgRating >= 4.3)
    setFilteredRestaurant(filteredRes);
  }

  console.log("filteredRestaurants : ", filteredRestaurant);

  return (
    <div className="px-2">
      {filteredRestaurant.length == 0 ?
        <SkeltonCard />
        :
        <>
          <div className="mb-5  flex gap-3">
            <input className="border p-1" placeholder="Search restaurant"
              onChange={(event) => setSearchRestaurant(event.target.value)} />
            <button className="p-2 bg-orange-400" onClick={handleSearchRestaurant}>search</button>

            <button className="p-2  bg-orange-400" onClick={handleTopRatedRestaurant} >Top rated restaurant</button>
          </div>
          <div className="flex flex-wrap ">
            {filteredRestaurant.map((res) => (
              <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
                <RestaurantCard restaurant={res.info} />
              </Link>
            ))}
          </div>
        </>
      }
    </div>
  )
}

export default Body;