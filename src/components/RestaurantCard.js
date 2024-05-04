import { CDN_URL } from "../utils/constants";


const RestaurantCard = ({ restaurant }) => {
    const { info } = restaurant;
    const {
        cloudinaryImageId,
        name,
        locality,
        areaName,
        costForTwo,
        cuisines,
        avgRatingString,
        sla
    } = info;

    return (

        <div className="res-Container">
            <div className="res-card">
                <img className="res-logo" alt="no image" src={CDN_URL + cloudinaryImageId} />
                <div className="res-description">
                    <div>{name}</div>
                    <div>{avgRatingString}</div>
                </div>
                <div>{sla.deliveryTime} minutes</div>
            </div>
        </div>
    )
}

export default RestaurantCard;