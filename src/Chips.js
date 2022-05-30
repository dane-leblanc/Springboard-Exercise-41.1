import React from "react";
import { NavLink } from "react-router-dom";
import chipsImg from "./chips.gif";
function Chips() {
  return (
    <>
      <img src={chipsImg} alt="snickers" />
      <p>
        <NavLink to="/">Back to the Machine</NavLink>
      </p>
    </>
  );
}

export default Chips;
