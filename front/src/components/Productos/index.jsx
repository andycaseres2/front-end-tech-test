import "./styles.css";
import { useContext } from "react";
import CartContext from "../../context/CardContext";

const Productos = ({ productos }) => {
  const { AddItemToCart } = useContext(CartContext);
  return (
    <div className="container">
      {productos.map((p) => (
        <div className="productos" key={p._id}>
          <img className="img" src={p.image} alt={p.name} />
          <div className="info">
            <p>
              {p.name} - ${p.price}
            </p>
          </div>
          <button className="btn" onClick={() => AddItemToCart(p._id)}>
            Add to Card
          </button>
        </div>
      ))}
    </div>
  );
};

export default Productos;
