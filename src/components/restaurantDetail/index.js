import { useEffect, useState } from "react";
import { RESTAURANT_DETAILS_URL } from "../../utils/constants";

import { useParams } from "react-router-dom";

import ratingIcon from "../../../assests/Icon/ratingIcon.png";

import SkeltonCard from "../SkeltenCard";
import Menu from "./Menu";

const RestaurantDetails = () => {
    const { resId } = useParams();

    const [restaurantInfo, setRestaurantInfo] = useState(null);
    const [restaurantMenu, setRestaurantMenu] = useState(null);

    useEffect(() => {
        fetchRestaurantDetails();
    }, [resId]);

    const fetchRestaurantDetails = async () => {
        const result = await fetch(RESTAURANT_DETAILS_URL + resId);

        const restaurantDetailsJson = await result.json();

        // console.log("restaurant : ", restaurantDetailsJson.data.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards);
        setRestaurantInfo(restaurantDetailsJson?.data?.cards[2]?.card?.card?.info);
        setRestaurantMenu(
            restaurantDetailsJson?.data?.cards[4]?.groupedCard?.cardGroupMap.REGULAR
                .cards
        );
    };

    if (restaurantInfo === null) {
        return (
            <>
                <SkeltonCard />
            </>
        );
    }


    console.log(typeof restaurantMenu);

    const {
        name,
        city,
        avgRating,
        cuisines,
        cloudinaryImageId,
        costForTwoMessage,
        locality,
        totalRatingsString,
        sla,
    } = restaurantInfo;

    return (
        <div className="restaurant-detail-container">
            <h2>{name}</h2>
            <div className="restaurant-infoBox">
                <div className="restaurant-ratings">
                    <img className="ratingIcon" src={ratingIcon} />
                    <div>{avgRating}</div>
                    <div>({totalRatingsString}).</div>
                    <div>{costForTwoMessage}</div>
                </div>
                <div style={{ paddingTop: "15px", display: "flex", gap: 5 }}>
                    <div>{city}-</div>
                    <div>{locality}</div>
                </div>
                <div style={{ paddingTop: "10px" }}>Deliver in : {sla.slaString}</div>
            </div>
            <Menu restaurantMenu={restaurantMenu} />
        </div>
    );
};

export default RestaurantDetails;
