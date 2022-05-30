import React from "react";
import { NavLink } from "react-router-dom";
import sodaImg from "./dr-pepper-soda.gif";

function Soda() {
  return (
    <>
      <img src={sodaImg} width="400" alt="soda" />
      <p>
        <NavLink to="/">Back to the Machine</NavLink>
      </p>
    </>
  );
}

export default Soda;
