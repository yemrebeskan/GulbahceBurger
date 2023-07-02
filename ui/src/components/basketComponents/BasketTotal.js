import { useContext } from "react";
import "./BasketTotal.css";
import itemContext from "../../context/itemContext";
import axios from "axios";

const BasketTotal = () => {
  const itemCtx = useContext(itemContext);
  // remove from db
  const clearCartHandler = async () => {
    await axios.delete("http://127.0.0.1:3001/api/v1/carts");
    window.location.reload();
  };

  return (
    <div className="grid grid-cols-2 basket-total p-2">
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-16 h-16 ml-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        <div className="flex ml-4 mt-4">
          <p className="ml-4">Basket Total:</p>
          <p className="ml-2 total-price">{itemCtx.totalPrice} TL</p>
        </div>
      </div>
      <div className="flex justify-self-end">
        <button
          className=" purchase-button w-32 mr-28 h-20 "
          onClick={clearCartHandler}
        >
          Clear Cart
        </button>
        <button className="purchase-button justify-self-end w-36 mr-28 h-20">
          Purchase
        </button>
      </div>
    </div>
  );
};

export default BasketTotal;
