import BasketContent from "../components/basketComponents/BasketContent";
import BasketTotal from "../components/basketComponents/BasketTotal";
import { useEffect, useContext, useState } from "react";
import itemContext from "../context/itemContext";
import axios from "axios";

const BasketDetail = () => {
  const itemCtx = useContext(itemContext);
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    itemCtx.handleCurrentPage("Basket Screen");
    const getCardItems = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:3001/api/v1/carts");
        setBasketItems(response.data.basket.items);
      } catch (error) {
        console.log(error);
      }
    };
    getCardItems();
  }, []);

  return (
    <div>
      <div className="mt-4">
        <BasketTotal></BasketTotal>
      </div>
      <div className="mb-4">
        <BasketContent basket={basketItems}></BasketContent>
      </div>
    </div>
  );
};

export default BasketDetail;
