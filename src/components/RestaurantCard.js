import { CDN_URL } from "../utils/constants";

import ratingIcon from "../../assests/Icon/ratingIcon.png"
import { useContext } from "react";
import UserContext from "../utils/context/UserContext";

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
        <div className="w-44 text-ellipsis m-2 shadow-lg bg-gray-300 hover:bg-gray-500 p-1 rounded-md">
            <div className="">
                <div className=" w-42  h-36">
                    <img className="rounded-md object-cover w-full h-full" alt="no image" src={CDN_URL + cloudinaryImageId} />
                </div>
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