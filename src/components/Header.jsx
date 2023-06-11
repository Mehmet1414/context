import { Link, useNavigate } from "react-router-dom";

import { useContext } from "react";
import CartContext from "../CartContext";

const Header = () => {
  const navigate = useNavigate();
  const {items} = useContext(CartContext)


  return (
    <header className="navbar shadow bg-dark text-light fixed-top">
      <div className="container-fluid mx-3 ">
        <Link to={"/"}>
          <h1 className="text-light">M&A</h1>
        </Link>
        <div
          className=" d-flex align-items-center "
          onClick={() => navigate("/checkout")}
        >
          <i className="bi bi-cart4 fs-1"></i>
          <span className="badge bg-danger ">{items.length}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
