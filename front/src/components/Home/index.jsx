import React from "react";
import "./styles.css";
import Productos from "../Productos/index";
import Cart from "../Cart/index";

const Home = ({ productos }) => {
  return (
    <div className="home">
      <Cart productos={productos} />
      <Productos productos={productos} />
    </div>
  );
};

export default Home;
