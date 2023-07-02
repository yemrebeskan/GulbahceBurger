import AboutUsContent from "../components/AboutUsContent";
import CardContainer from "../components/CardContainer";
import UserForm from "../components/UserForm";
import { useContext, useEffect } from "react";
import itemContext from "../context/itemContext";

const HomePage = ({ toggleAboutUs }) => {
  const itemCtx = useContext(itemContext);
  useEffect(() => {
    itemCtx.handleCurrentPage("New Home Page");
  }, []);

  return (
    <div>
      <UserForm></UserForm>
      <AboutUsContent showAboutUs={toggleAboutUs}></AboutUsContent>
      <CardContainer></CardContainer>
    </div>
  );
};

export default HomePage;
