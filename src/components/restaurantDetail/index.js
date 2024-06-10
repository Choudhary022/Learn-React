import { useParams } from "react-router-dom";

import ratingIcon from "../../../assests/Icon/ratingIcon.png";

import SkeltonCard from "../SkeltenCard";

import Menu from "./Menu";

import useRestaurantDetails from "../../utils/useRestaurantDetail";

import { CDN_URL } from "../../utils/constants";

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
        <div className="mx-36">
            <h2 className="font-bold mb-2">{name}</h2>
            <div className="shadow-lg p-2 border border-grey rounded-lg ">
                <div className="flex justify-between">
                    <div>
                        <div className="flex flex-wrap gap-1 ">
                            <img className="w-5" src={ratingIcon} />
                            <div>{avgRating}</div>
                            <div>({totalRatingsString}).</div>
                            <div>{costForTwoMessage}</div>
                        </div>
                        <div className="flex pt-4 gap-1" >
                            <div>{city}-</div>
                            <div>{locality}</div>
                        </div>
                        <div className="pt-4">Deliver in : {sla.slaString}</div>
                    </div>
                    <img className="rounded-md w-28" src={CDN_URL + cloudinaryImageId} />
                </div>
            </div>

            <Menu restaurantMenu={restaurantMenu} />

        </div>
    )
}

export default RestaurantDetails;