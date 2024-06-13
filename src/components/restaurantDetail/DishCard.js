import { CDN_URL } from "../../utils/constants";
import ratingIcon from "../../../assests/Icon/ratingIcon.png";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/store/cartSlice";

const DishCard = ({ item }) => {

    const dispatch = useDispatch();

    if (item == undefined) {
        return <></>
    }

    const { name, price, imageId, description, ratings } = item?.card?.info;

    const handleAddItems = (item) => {
        console.log("item detail :", item);
        dispatch(addItem(item))
    }

    return (<>
        <div className="flex justify-between m-2 border-b-2 pb-2 mt-1" >
            <div>
                <div className="font-semibold">{name}</div>
                <div>Rs - {price / 100}</div>
                <div className="flex gap-1 py-1"> <img className="w-5" src={ratingIcon} />{ratings?.aggregatedRating?.rating}</div>
                <div>{description}</div>
            </div>
            <div>
                <button className="absolute bg-black text-white rounded-md p-1 hover:bg-slate-500 "
                    onClick={() => handleAddItems(item)}>Add+</button>
                <img className="w-36 rounded-lg h-24" alt="no img" src={CDN_URL + imageId} />
            </div>
        </div>
    </>)
}

export default DishCard;