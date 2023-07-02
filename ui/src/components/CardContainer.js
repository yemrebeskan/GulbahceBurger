import Card from "./Card";
import "./CardContainer.css";
import cheesePic from "./foodPictures/cheeseburger.jpg";
import chickenBurgerPic from "./foodPictures/chicken_burger.jpg";
import fizzyDringPic from "./foodPictures/fizzy_drink.jpg";
import onionRingPic from "./foodPictures/onion_rings.jpg";
import friesPic from "./foodPictures/fries.jpg";
import waterPic from "./foodPictures/water.jpg";
import lemonadePic from "./foodPictures/lemonade.jpg";
import IceCreamPic from "./foodPictures/ice_cream.jpg";
import PizzaSlicePic from "./foodPictures/pizza_slice.jpg";
import ChickenLegPic from "./foodPictures/chicken_legs.jpg";
import BeefBurgerPic from "./foodPictures/beef_burger.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

const CardContainer = () => {
  const [cardList, setCardList] = useState([]);
  const imgLists = [
    cheesePic,
    onionRingPic,
    friesPic,
    chickenBurgerPic,

    fizzyDringPic,
    waterPic,
    BeefBurgerPic,
    ChickenLegPic,
    IceCreamPic,

    lemonadePic,
    PizzaSlicePic,
  ];
  useEffect(() => {
    const getCardItems = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:3001/api/v1/items");
        let i = -1;
        const foodList = response.data.items.map((item) => {
          i += 1;
          item.picture = imgLists[i];
          return item;
        });
        setCardList(foodList);
        /*const text = await response.text();
        const lines = text.split("\n");
        let i = -1;
        const items = lines.map((line) => {
          i += 1;
          const [burger, price, picture] = line.split(",");
          return { burger, price, picture: imgLists[i] };
        });*/
      } catch (error) {
        console.error(error);
      }
    };
    getCardItems();
  }, []);

  return (
    <section>
      <ul class="card-container grid grid-cols-3">
        {cardList.map((card) => {
          return <Card card={card} picture={card.picture}></Card>;
        })}
      </ul>
    </section>
  );
};

export default CardContainer;
