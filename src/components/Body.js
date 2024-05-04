
import RestaurantCard from "./RestaurantCard";
import RESTAURANT_LIST from "../utils/mockData";

const Body = () => {
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
