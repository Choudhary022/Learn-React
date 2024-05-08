import { CDN_URL } from "../utils/constants";

import ratingIcon from "../../assests/Icon/ratingIcon.png"

const RestaurantCard = ({ restaurant }) => {
    const {
        cuisines,
        name,
        cloudinaryImageId,
        avgRating,
        sla,
        areaName
    } = restaurant;


    return (
        <div className="res-Container">
            <div className="res-card">
                <img className="res-logo" alt="no image" src={CDN_URL + cloudinaryImageId} />
                <div className="res-name">{name}</div>
                <div style={{ display: "flex", gap: 5, alignItems:'center'}}>
                <img  className="ratingIcon" src={ratingIcon} />
                    <div>{avgRating}.</div>
                    <div>{sla.deliveryTime} minutes</div>
                </div>
                <div className="res-cuisines">{cuisines.join(',')}</div>
                <div>{areaName}</div>
            </div>
        </div >

    )
}

export default RestaurantCard;