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
            src="https://github.com/JCarlosLucio/where-is-waldo/blob/master/src/assets/the-loc-nar.jpg?raw=true"
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
