import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/PaginationLinks.css";

export default function PaginationLinks() {
  return (
    <div className="pagination-links">
      <NavLink to="/home/1">1</NavLink>
      <NavLink to="/home/2">2</NavLink>
    </div>
  );
}
