
import ItemsAccordion from "./ItemsAccordion";

const Menu = ({ restaurantMenu }) => {

    return (<div>
        <h4 style={{ textAlign: "center" }}>Menu</h4>

        {restaurantMenu.map((res, index) => {
            console.log("res : ", res.card);

            if (index == 0) {
                return null;
            }

            const { title, itemCards } = res.card.card;

            return (<div key={index}>
                <ItemsAccordion itemCards={itemCards} title={title} />
            </div>)

        })

        }



    </div>)
}

export default Menu;