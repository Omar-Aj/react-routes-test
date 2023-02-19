import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink style={{ textDecoration: "none" }} to={"/home/1"}>
        Home
      </NavLink>
      <NavLink style={{ textDecoration: "none" }} to="/about">
        About
      </NavLink>
    </div>
  );
}
