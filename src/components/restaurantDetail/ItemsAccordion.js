
import { useState } from "react";
import downArrow from "../../../assests/Icon/down-arrow.png"
import UpArrow from "../../../assests/Icon/Up-arrow.png"


const ItemsAccordion = ({ itemCards, title }) => {

    const [showCards,setShowCards]=useState(false);

    console.log("ItemsAccordion : ", itemCards);



    return (<div className="Accordion-container">

        <div style={{ display: "flex", justifyContent: "space-between", padding: "5px" }}>

            <div>{title}()</div>
           {showCards ? <img className="ratingIcon" src={UpArrow} onClick={()=>setShowCards(false)} /> 
           : <img className="ratingIcon" src={downArrow}  onClick={()=>setShowCards(true)} />}
        </div>


    </div>)
}

export default ItemsAccordion;


