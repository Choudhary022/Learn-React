
import { useEffect } from "react";
import { RESTAURANT_DETAILS_URL } from "../utils/constants";


import { useParams } from "react-router-dom";



const RestaurantDetails = () => {
    
    const {resId} = useParams();

    useEffect(() => {
        fetchRestaurantDetails();
    }, [resId])

    console.log("URL : ", RESTAURANT_DETAILS_URL + resId);

    const fetchRestaurantDetails = async () => {

        const result = await fetch(RESTAURANT_DETAILS_URL + resId);

        const restaurantDetailsJson = await result.json();

        console.log("restaurant : ", restaurantDetailsJson);

    }


    console.log("redId : ", resId);


    return (<div>
        <div>Restaurant Name</div>
        <div>Restaurant Details</div>



    </div>)
}

export default RestaurantDetails;



