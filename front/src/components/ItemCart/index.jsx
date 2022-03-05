import React, { useContext } from "react";
import "./styles.css";
import { CartContext } from "./../../context/CardContext";

const ItemCart = ({ productos }) => {
  const { DeleteItemToCart, AddItemToCart } = useContext(CartContext);
  const { id } = productos._id;

  return (
    <div className="itemcart">
      <img src={productos.image} />
      <div className="dataContainer">
        <div className="left">
          <p>{productos.name}</p>
          <div className="buttons">
            <button onClick={() => AddItemToCart(productos)}>Agregar</button>
            <button onClick={() => DeleteItemToCart(id)}>Sacar</button>
          </div>
        </div>
        <div className="rigth">
          <div className="rigth-div">{productos.amount}</div>
          <p className="rigth-total">
            Total: ${productos.amount * productos.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
