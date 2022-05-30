import React from "react";
import { Link } from "react-router-dom";
import vendImg from "./vending.webp";
import "./Options.css";

function Options() {
  return (
    <div className="Options">
      <img src={vendImg} alt="vending" />
      <h2>The options are...</h2>
      <span>
        <Link to="/soda">Soda</Link>
      </span>
      <span>
        <Link to="/candy">Candy</Link>
      </span>
      <span>
        <Link to="/chips">Chips</Link>
      </span>
    </div>
  );
}

export default Options;
