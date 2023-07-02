import "./BasketItem.css";

const BasketItem = ({ item }) => {
  return (
    <li className="mt-12 grid grid-cols-4 basket-item">
      <div className="basket-column ">
        <p className="mt-4">{item.name}</p>
      </div>
      <div className="flex basket-detail-option basket-column justify-center">
        <p className="mr-4 mt-4">
          {item.option ? item.option.optionName : "Standard"}
        </p>
        {item.option && <p className="mt-4">+({item.option.price}TL)</p>}
      </div>
      <div className="basket-column">
        <p className="mt-4">Quantity: {item.quantity}</p>
      </div>
      <div className="basket-column">
        <p className="mt-4">{item.price} TL</p>
      </div>
    </li>
  );
};

export default BasketItem;
