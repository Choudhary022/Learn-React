import { useState, useEffect } from "react";
import ItemsAccordion from "./ItemsAccordion";

const Menu = ({ restaurantMenu }) => {

    const [cardTitle, setCardTitle] = useState(null);

    return (<div className="mt-5">
        <h1 className="text-center font-bold" >Menu</h1>
        {restaurantMenu.map((res, index) => {
            if (index == 0) {
                return null;
            }
            const { title, itemCards } = res.card.card;

            return (<div key={index}>
                <ItemsAccordion
                    itemCards={itemCards}
                    title={title}
                    index={index}
                    key={title}
                    showCard={cardTitle === title ? true : false}
                    setCardTitle={setCardTitle}
                />
            </div>)
        })}
    </div>)
}

export default Menu;