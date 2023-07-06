import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function Main() {
  return (
    <div className="main">
      <Header />
      <div className="flex-container">
        <div className="card">
          <img
            className="thumbnail-image"
            alt="game1"
            src="/assets/background.png"
          />
          <Link to="/game">
            <button type="button">Start</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
