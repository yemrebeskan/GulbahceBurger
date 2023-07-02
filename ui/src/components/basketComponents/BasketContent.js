import BasketItem from "./BasketItem";

const BasketContent = ({ basket }) => {
  return (
    <ul className={`py-${basket.length < 3 ? 80 : 52} mt-12`}>
      {basket.map((item) => {
        return <BasketItem item={item}></BasketItem>;
      })}
    </ul>
  );
};

export default BasketContent;
