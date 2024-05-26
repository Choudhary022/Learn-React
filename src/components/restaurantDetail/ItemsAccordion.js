import downArrow from "../../../assests/Icon/down-arrow.png"
import UpArrow from "../../../assests/Icon/Up-arrow.png"
import DishCard from "./DishCard";

const ItemsAccordion = (props) => {

    const { itemCards, title, showCard, setCardTitle } = props;

    const handleExpandRestaurantList = () => {
        showCard ? setCardTitle(null) : setCardTitle(title);
    }

    if (itemCards == undefined) {
        return <></>
    }

    return (
        <div className="border border-grey shadow-lg mb-5 pb-1">
            <div
                onClick={handleExpandRestaurantList}
                className="flex justify-between  p-2"
            >
                <h2 className="font-bold">{title}({itemCards?.length})</h2>
                {showCard ?
                    <img className="h-5 cursor-pointer" src={UpArrow} onClick={() => setCardTitle(null)} />
                    : <img className="h-5 cursor-pointer" src={downArrow} onClick={() => setCardTitle(title)} />
                }
            </div>


            {showCard && <>
                {itemCards.map((item, index) => {
                    return <DishCard item={item} index={index} key={index} />
                })}
            </>}
        </div>
    )
}

export default ItemsAccordion;