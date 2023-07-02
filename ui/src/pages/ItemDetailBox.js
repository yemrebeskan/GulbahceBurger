import { useEffect, useContext, useState } from "react";
import itemContext from "../context/itemContext";
import "./ItemDetailBox.css";
import axios from "axios";
const ItemDetailBox = () => {
  const itemCtx = useContext(itemContext);
  const [selectedOption, setSelectedOption] = useState({});
  const currentItem = JSON.parse(localStorage.getItem("currentItem"));
  useEffect(() => {
    const currentItem = JSON.parse(localStorage.getItem("currentItem"));
    currentItem.options.length !== 0
      ? itemCtx.handleCurrentPage("Menu Item Page With Options")
      : itemCtx.handleCurrentPage("Menu Item Page Without Options");
    const selectOption = currentItem.options ? currentItem.options[1] : {};
    setSelectedOption(selectOption);
  }, []);

  const addToBasket = async () => {
    selectedOption
      ? await axios.put(
          `http://127.0.0.1:3001/api/v1/carts/${itemCtx.currentItem._id.toString()}`,
          {
            optionId: selectedOption._id,
          }
        )
      : await axios.put(
          `http://127.0.0.1:3001/api/v1/carts/${itemCtx.currentItem._id.toString()}`
        );

    window.location.reload();
  };
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      {currentItem.options && currentItem.options.length !== 0 && (
        <div className="flex py-12 ml-16 mb-12 mr-16">
          <div className="ml-12  border-2 p-32 item-detail-content" dir="rtl">
            <h1 className="mb-8">{currentItem.name}</h1>
            <p className="mb-8">{currentItem.price}</p>
            <img
              className="item-detail-picture"
              src={currentItem.picture}
            ></img>
          </div>
          <div className="border-2 p-32">
            {currentItem.options.map((option, index) => {
              return (
                <div className="flex mt-20 px-52">
                  <input
                    index={index}
                    name="selectedOption"
                    type="radio"
                    className="form-radio h-5 w-5 mr-4"
                    onClick={() => handleOptionChange(option)}
                    checked={index === 1}
                    // checked={props.selectedCandidate === props.candidate}
                  />
                  <div className="flex">
                    <p className="mr-12">{option.optionName}</p>
                    <p>{option.price}TL</p>
                  </div>
                </div>
              );
            })}
            <button
              className="border-2 w-32 h-12  mt-12 add-to-basket"
              onClick={addToBasket}
            >
              Add to Basket
            </button>
          </div>
        </div>
      )}
      {currentItem.options && currentItem.options.length === 0 && (
        <div className="flex border-2 item-detail-content mt-12 ml-12 mr-12  py-48 justify-center">
          <img
            className="item-detail-picture-without-options mr-40"
            src={currentItem.picture}
          ></img>
          <div className="ml-80 block">
            <h1 className="text-6xl mt-12">{currentItem.name}</h1>
            <p className="text-4xl mt-20">{currentItem.price}</p>
            <button
              className="border-2 w-32 h-12  mt-12 add-to-basket"
              onClick={addToBasket}
            >
              Add to Basket
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetailBox;
