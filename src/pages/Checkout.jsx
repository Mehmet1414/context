import CartContext from "../CartContext";
import { useContext } from "react";

const checkout = () => {
  const { items,increaseAmount,decreaseAmount } = useContext(CartContext); // cartContext'ten sadece items alındı
  //console.log(items)

  const totalGeneralPrice = items.reduce(
    (total, item) => total + item.price * item.amount,
    0
  ).toFixed(2);

  
  return (
    <div className="d-flex flex-column justify-content-center align-items-center  gap-5 mt-5 mb-5 ">
      <h1 className=" mt-5">
        Toplam: <span className=" badge bg-danger">{totalGeneralPrice} $</span>
      </h1>
      {items.map((item) => (
        <div
          key={item.id}
          className={
            "d-flex shadow p-4 justify-content-evenly align-items-center rounded w-75"
          }
        >
          <img
            src={item.image}
            style={{ width: "100px" }}
            className={"rounded"}
            alt={item.name}
          />
          <div className="d-flex flex-column align-items-start">
            <h1>{item.name}</h1>
            <span className="text-success fs-5">Fiyat: {item.price} $</span>
            <span className="d-flex align-items-center gap-2 border rounded">
              <button
                className="btn btn-danger btn-sm"
                onClick={() => decreaseAmount(item.id)}
              >
                -
              </button>
              Miktar: {item.amount}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => increaseAmount(item.id)}
              >
                +
              </button>
            </span>
            <span>Toplam Fiyat: {(item.price * item.amount).toFixed(2)}$</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default checkout;
