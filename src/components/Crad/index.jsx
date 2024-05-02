

const RestaurantCard = ({ restaurant }) => {
    const {
        restaurantName,
        type,
        address,
        deliveryTime,
        img,
        rating } = restaurant;

    return (
        <div className="res-Container">
            <div className="res-card">
                <img className="res-logo" alt="no image" src={img} />
                <div className="res-description">
                    <div>{restaurantName}</div>
                    <div>{rating}</div>
                </div>
                <div>{deliveryTime} minutes</div>
            </div>
        </div>)
}

export default RestaurantCard;