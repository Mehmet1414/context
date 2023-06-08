import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="navbar shadow bg-dark text-light ">
      <div className="container-fluid mx-3 ">
        <Link to={"/"}>
          <h1 className="text-light">M&A</h1>
        </Link>
        <div
          className=" d-flex align-items-center "
          onClick={() => navigate("/checkout")}
        >
          <i className="bi bi-cart4 fs-1"></i>
          <span className="badge bg-danger ">3</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
