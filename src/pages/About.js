import React from "react";
import { Link } from "react-router-dom";
// components
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="about">
      <Navbar />
      <main>
        <button className="home-btn">
          <Link style={{ textDecoration: "none" }} to="/home/1">
            Button
          </Link>
        </button>
      </main>
    </div>
  );
}
