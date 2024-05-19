import { CDN_URL } from "../../utils/constants";

const DishCard = ({ item }) => {


    if (item == undefined) {
        return <></>
    }

    const {name,price,imageId}=item?.card?.info;
    return (<>

        <div style={{ display: "flex", justifyContent: "space-between",margin:"5px" }}>
            <div>
                <h3>{name}</h3>
                <div>{price/100}</div>
                <div>Rating</div>
                <div>Description</div>

            </div>
            <div>
                <img   className="res-logo" alt="no img" src={CDN_URL+imageId} />
                <button>Add</button>
            </div>
        </div>
    </>)
}

export default DishCard;