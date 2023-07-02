import "./Card.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import itemContext from "../context/itemContext";
const Card = ({ card, picture }) => {
  const itemCtx = useContext(itemContext);
  return (
    <li class="card-item">
      <Link to={`/item/${card.name}`}>
        <img
          src={card.picture}
          onClick={() => itemCtx.handleCurrentItem(card)}
        ></img>
      </Link>
      <div class="item-content">
        <Link to={`/item/${card.name}`}>
          <p
            class="burger-name"
            onClick={() => itemCtx.handleCurrentItem(card)}
          >
            {card.name}{" "}
          </p>
        </Link>
        <p class="burger-price">${card.price}</p>
      </div>
    </li>
  );
};

export default Card;
