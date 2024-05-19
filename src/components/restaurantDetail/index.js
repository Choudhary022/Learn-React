import { useParams } from "react-router-dom";

import ratingIcon from "../../../assests/Icon/ratingIcon.png";

import SkeltonCard from "../SkeltenCard";

import Menu from "./Menu";

import useRestaurantDetails from "../../utils/useRestaurantDetail";

const RestaurantDetails = () => {
    const { resId } = useParams();

    const { resInfo, restaurantMenu } = useRestaurantDetails(resId);

    if (resInfo === undefined) {
        return (
            <>
                <SkeltonCard />
            </>
        );
    }

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
    } = resInfo;

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
    )
}

export default RestaurantDetails;