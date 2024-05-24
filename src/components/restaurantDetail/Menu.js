
import ItemsAccordion from "./ItemsAccordion";

const Menu = ({ restaurantMenu }) => {

    return (<div className="mt-5">
        <h1 className="text-center font-bold" >Menu</h1>
        {restaurantMenu.map((res, index) => {
            if (index == 0) {
                return null;
            }
            const { title, itemCards } = res.card.card;
            return (<div key={index}>
                <ItemsAccordion itemCards={itemCards} title={title} />
            </div>)
        })}
    </div>)
}

export default Menu;