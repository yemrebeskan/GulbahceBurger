import axios from "axios";
import React, { useState, useEffect } from "react";

const itemContext = React.createContext({
  currentItem: {},
  currentPage: "",
  totalPrice: 0,
  basket: [],
  handleCurrentItem: () => {},
  handleCurrentPage: () => {},
  updateTotalPrice: () => {},
});

export const ItemContextProvider = (props) => {
  const [currentItem, setCurrentItem] = useState({});
  const [currentPage, setCurrentPage] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3001/api/v1/items/total/price")
      .then((result) => {
        setTotalPrice(result.data.totalPrice);
      })
      .catch((err) => {
        console.log(err);
      });
    const currentItem = localStorage.getItem("currentItem");
    setCurrentItem(JSON.parse(currentItem));
  }, []);

  const handleCurrentItem = (item) => {
    localStorage.setItem("currentItem", JSON.stringify(item));
    setCurrentItem(item);
  };

  const handleCurrentPage = (newPage) => {
    setCurrentPage(newPage);
  };

  const updateTotalPrice = (itemPrice, optionPrice) => {
    setTotalPrice((prevState) => prevState + itemPrice + optionPrice);
  };
  return (
    <itemContext.Provider
      value={{
        currentItem: currentItem,
        currentPage: currentPage,
        totalPrice: totalPrice,
        handleCurrentItem: handleCurrentItem,
        handleCurrentPage: handleCurrentPage,
        updateTotalPrice: updateTotalPrice,
      }}
    >
      {props.children}
    </itemContext.Provider>
  );
};

export default itemContext;
