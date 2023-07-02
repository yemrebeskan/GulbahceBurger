import "./NavBar.css";
import { Link } from "react-router-dom";
import DisplayBasket from "./basketComponents/DisplayBasket";
import { useContext } from "react";
import itemContext from "../context/itemContext";

const NavBar = (props) => {
  const itemCtx = useContext(itemContext);

  return (
    <nav class="nav relative py-4 ">
      <div class="nav-links grid flex grid-cols-3">
        <Link to="/">
          <h1 class="project-title mt-8 text-2xl">Gülbahçe Burger</h1>
        </Link>
        {itemCtx.currentPage === "New Home Page" && (
          <div class="nav-link ml-12 ">
            <a onClick={props.toggleAboutUs} className="about-us">
              About Us
            </a>
          </div>
        )}
        {itemCtx.currentPage !== "Basket Screen" && (
          <div className="mt-8 mb-4 justify-self-end display-basket ml-80 self-end">
            <DisplayBasket></DisplayBasket>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
