import { useState } from "react";
import downArrow from "../../../assests/Icon/down-arrow.png"
import UpArrow from "../../../assests/Icon/Up-arrow.png"
import DishCard from "./DishCard";


const ItemsAccordion = ({ itemCards, title }) => {

    const [showCards, setShowCards] = useState(false);

    if (itemCards == undefined) {
        return <></>
    }
    return (
        <div style={{ border: "1px solid black", marginBottom: "20px" }}>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "5px", alignItems: "flex-start" }}>
                <h2 style={{ margin: "0px" }}>{title}({itemCards?.length})</h2>
                {showCards ? <img className="ratingIcon" src={UpArrow} onClick={() => setShowCards(false)} />
                    : <img className="ratingIcon" src={downArrow} onClick={() => setShowCards(true)} />}
            </div>

        {  showCards && <>
                {itemCards.map((item,index) => {
                   return  <DishCard item={item}  key={index}/>
                })}
            </>}


        </div>
    )
}

export default ItemsAccordion;