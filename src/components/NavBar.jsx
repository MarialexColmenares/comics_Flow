import "./components.css"; // Asegúrate de que la ruta sea correcta
import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-content">
            <Link className="nav-link" to="/">
              Home
            </Link>{" "}
            <Link className="nav-link" to="/about">
              About
            </Link>{" "}
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
