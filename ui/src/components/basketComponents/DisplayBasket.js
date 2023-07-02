import "./DisplayBasket.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const DisplayBasket = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:3001/api/v1/items/total/price")
      .then((result) => {
        setTotalPrice(result.data.totalPrice);
      })
      .then((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="border-2 w-60 h-16">
      <div className=" display-basket flex mt-4">
        <div className="flex mr-8">
          <p className="mr-4 ml-4">Basket Total:</p>
          <p>{totalPrice}$</p>
        </div>

        <button className="mr-12 ">
          <Link to="/basket">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8  hover:cursor-pointer hover:scale-150"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default DisplayBasket;
