import { useSelector } from "react-redux";
import DishCard from "./restaurantDetail/DishCard";


const Cart = () => {

    const cartItem = useSelector((store) => store.cart.items)


    if (cartItem.length==0) {
       return  <div>Oops You don't have anything in your Cart</div>
    }
    return (<div className="m-10">
      

       {cartItem.map(item=>{
        return  <DishCard item={item} />

       }) }

    </div>)
}


export default Cart;