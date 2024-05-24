import { useState } from "react";
import downArrow from "../../../assests/Icon/down-arrow.png"
import UpArrow from "../../../assests/Icon/Up-arrow.png"
import DishCard from "./DishCard";

const ItemsAccordion = ({ itemCards, title }) => {

    const [showCards, setShowCards] = useState(false);


    const handleExpandRestaurantList = () => {
        showCards ? setShowCards(false) : setShowCards(true);
    }

    if (itemCards == undefined) {
        return <></>
    }

    return (
        <div className="border border-grey shadow-lg mb-5 pb-1">
            <div
                onClick={handleExpandRestaurantList}
                className="flex justify-between  px-2 pt-1 shadow-sm"
            >
                <h2 style={{ margin: "0px" }}>{title}({itemCards?.length})</h2>
                {showCards ?
                 <img className="h-5 cursor-pointer" src={UpArrow} onClick={() => setShowCards(false)} />
                    : <img className="h-5 cursor-pointer" src={downArrow} onClick={() => setShowCards(true)} />
                }
            </div>

            {showCards && <>
                {itemCards.map((item, index) => {
                    return <DishCard item={item} key={index} />
                })}
            </>}
        </div>
    )
}

export default ItemsAccordion;