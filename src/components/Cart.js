import React from "react";
import { useDispatch, useSelector } from "react-redux";

//import { clearCart } from "./utils/cartSlice";
import ItemList from "./ItemList";
//import { clearCart } from "./utils/cartSlice";
//import { addItem } from "./utils/cartSlice";
import { clearCart } from "./utils/cartSlice.js";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems, "Items from cart");
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="m-4 p-4 text-center">
      <h1 className="text-2xl">Cart Page</h1>

      <div>
        <button onClick={handleClearCart}>Clear Cart</button>
      </div>
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
