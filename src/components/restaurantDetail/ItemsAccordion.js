import { useState } from "react";
import downArrow from "../../../assests/Icon/down-arrow.png"
import UpArrow from "../../../assests/Icon/Up-arrow.png"
import DishCard from "./DishCard";

const ItemsAccordion = ({ itemCards, title }) => {

    const [cardId, setCardId] = useState(null);


    const handleExpandRestaurantList = () => {
        cardId ? setCardId(null) : setCardId(title);
    }

    console.log(" cardId :",cardId,"tittle :",title);
    if (itemCards == undefined) {
        return <></>
    }

    console.log("condition : ",cardId===title);

    return (
        <div className="border border-grey shadow-lg mb-5 pb-1">
            <div
                onClick={handleExpandRestaurantList}
                className="flex justify-between  p-2"
            >
                <h2 className="font-bold">{title}({itemCards?.length})</h2>
                {cardId ?
                 <img className="h-5 cursor-pointer" src={UpArrow} onClick={() => setCardId(null)} />
                    : <img className="h-5 cursor-pointer" src={downArrow} onClick={() => setCardId(title)} />
                }
            </div>

            {cardId===title ? <>
                {itemCards.map((item, index) => {
                    return <DishCard item={item} index={index} />
                })}
            </> : null}
        </div>
    )
}

export default ItemsAccordion;