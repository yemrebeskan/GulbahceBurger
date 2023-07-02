import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import BasketDetail from "./pages/BasketDetail";
import ItemDetailBox from "./pages/ItemDetailBox";
import PageNav from "./components/PageNav";
function App() {
  const [toggleAboutUs, setToggleAboutUs] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <PageNav />
        <NavBar
          toggleAboutUs={() => {
            setToggleAboutUs((prevState) => !prevState);
          }}
        ></NavBar>
        <Routes>
          <Route
            path="/"
            element={<HomePage toggleAboutUs={toggleAboutUs} />}
          />
          <Route path="/basket" element={<BasketDetail />} />
          <Route path="/item/:name" element={<ItemDetailBox />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
