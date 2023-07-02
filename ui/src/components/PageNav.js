import { useContext } from "react";
import itemContext from "../context/itemContext";
import "./PageNav.css";
const PageNav = () => {
  const itemCtx = useContext(itemContext);
  return (
    <div className="py-4 justify-start flex  page-nav">
      <p className="ml-8">{itemCtx.currentPage}</p>
    </div>
  );
};

export default PageNav;
