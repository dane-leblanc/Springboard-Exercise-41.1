import React from "react";
import { NavLink } from "react-router-dom";
import candyImg from "./candy-bar.gif"

function Candy() {
  return (
    <>
      <img src={candyImg} alt="Snickers"/>
      <p>
        <NavLink to="/">Back to the Machine</NavLink>
      </p>
    </>
  );
}

export default Candy;
