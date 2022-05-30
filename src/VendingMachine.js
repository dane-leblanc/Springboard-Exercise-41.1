import React from "react";
import NavBar from "./NavBar.js";
import Options from "./Options.js";
import Chips from "./Chips.js";
import Soda from "./Soda.js";
import Candy from "./Candy.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function VendingMachine() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <h1>Vending Machine</h1>
        <h2>Look at my vends.</h2>
        <div>
          <Routes>
            <Route path="/" element={<Options />} />
            <Route path="/chips" element={<Chips />} />
            <Route path="/soda" element={<Soda />} />
            <Route path="/candy" element={<Candy />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default VendingMachine;
