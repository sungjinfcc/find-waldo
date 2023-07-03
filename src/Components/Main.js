import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function Main() {
  return (
    <div className="main">
      <Header />
      <h1>Main</h1>
      <Link to="/game">Play</Link>
    </div>
  );
}

export default Main;
