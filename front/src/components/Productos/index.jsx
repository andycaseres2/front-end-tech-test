import "./styles.css";
import phone from "../images/phone.jpg";
import { useContext } from "react";
import CartContext from "../../context/CardContext";

const Productos = ({ productos }) => {
  const { AddItemToCart } = useContext(CartContext);
  return (
    <div className="container">
      {productos.map((p) => (
        <div className="productos" key={p._id}>
          <img className="img" src={phone} alt={p.name} />
          <div className="info">
            <p>
              {p.name} - ${p.price}
            </p>
          </div>
          <button className="btn" onClick={() => AddItemToCart(productos)}>
            Add to Card
          </button>
        </div>
      ))}
    </div>
  );
};

export default Productos;
