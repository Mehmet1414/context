import { useContext } from "react";
import CartContext from "../CartContext";

const Card = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="card">
      <img src={product.image} />
      <div className=" card-body">
        <div className=" d-flex justify-content-between">
          <h4>{product.name}</h4>
          <p>{product.price}$</p>
        </div>
        <button 
        className="btn btn-outline-dark" 
        onClick={()=> addToCart(product)}
        >
          Setete Ekle
        </button>
      </div>
    </div>
  );
};

export default Card;
