import React, { useEffect, useState } from "react";
import Home from "./components/Home/index";
import { CartProvider } from "./context/CardContext";

const App = () => {
  const API_URL = "http://localhost:5000/api/products";
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    fetchApi(API_URL);
  }, []);

  const fetchApi = async () => {
    const data = await fetch(API_URL);
    const product = await data.json();
    setProducto(product);
  };

  return (
    <CartProvider>
      <Home productos={producto} />
    </CartProvider>
  );
};

export default App;
