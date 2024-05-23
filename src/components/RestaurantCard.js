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
        <div className="w-44 text-ellipsis m-2 bg-gray-300 hover:bg-gray-500 p-1 rounded-md">
            <div className="">
                <img className="rounded-md"  alt="no image" src={CDN_URL + cloudinaryImageId} />
                <h2 className="font-bold w-40 truncate">{name}</h2>
                <div className="flex space-x-1 ">
                    <img className="w-5" src={ratingIcon} />
                    <div>{avgRating}.</div>
                    <div>{sla.deliveryTime} minutes</div>
                </div>
                <div className="w-32 truncate">{cuisines.join(',')}</div>
                <div>{areaName}</div>
            </div>
        </div >

    )
}

export default RestaurantCard;