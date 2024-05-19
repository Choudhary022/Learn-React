import { useState, useEffect } from "react";
import { RESTAURANT_DETAILS_URL } from "./constants";

const useRestaurantDetails = ( resId)  => {

    const [resInfo, setResInfo] = useState();
    const [restaurantMenu, setRestaurantMenu] = useState(null);

    useEffect(() => {
        fetchRestaurantDetails();
    }, [resId])

    const fetchRestaurantDetails = async () => {
        const result = await fetch(RESTAURANT_DETAILS_URL + resId);
        const restaurantDetailsJson = await result.json();
        setResInfo(restaurantDetailsJson?.data?.cards[2]?.card?.card?.info);
        setRestaurantMenu(
            restaurantDetailsJson?.data?.cards[4]?.groupedCard?.cardGroupMap.REGULAR
                .cards
        );
    }


    return { resInfo, restaurantMenu };
}

export default useRestaurantDetails;