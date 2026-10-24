import { useDispatch, useSelector } from "react-redux";
import ItemLists from "./ItemLists";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const clearbtn = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector(function (store) {
    return store.cart.items;
  });
  return (
    <div className="cart">

      <button
        onClick={clearbtn}
      >
        Clear
      </button>
      <div className="cartItems">
        {cartItems.length===0?"Cart is empty":<ItemLists itemData={cartItems} />}
        
      </div>
    </div>
  );
};
export default Cart;
