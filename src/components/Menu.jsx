import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar
      className="d-flex justify-content-between px-5"
      variant="light"
      style={{ background: "#58585a" }}
    >
      <Navbar.Brand>
        <img
          width="50"
          src="/poke-icon.svg"
          alt=""
        />
      </Navbar.Brand>
      <div>
        <NavLink
          className={({ isActive }) => (isActive ? "me-3 active" : "me-3")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/pokemones"
        >
          {" "}
          Pokemones{" "}
        </NavLink>
      </div>
    </Navbar>
  );
};
export default Menu;