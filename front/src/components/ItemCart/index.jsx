import React, { useContext } from "react";
import CartContext from "../../context/CardContext";

import "./styles.css";

const ItemCart = ({ productos }) => {
  const { DeleteItemToCart, AddItemToCart } = useContext(CartContext);
  const { _id } = productos;

  return (
    <div className="itemcart">
      <img src={productos.image} alt="img" />
      <div className="dataContainer">
        <div className="left">
          <p>{productos.name}</p>
          <div className="buttons">
            <button onClick={() => AddItemToCart(_id)}>Agregar</button>
            <button onClick={() => DeleteItemToCart(_id)}>Eliminar</button>
          </div>
        </div>
        <div className="rigth">
          <div className="rigth-div">{"cantidad"}</div>
          <p className="rigth-total">Total: {productos.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
