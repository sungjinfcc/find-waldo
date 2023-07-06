import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Main() {
  return (
    <div className="main">
      <div className="non-footer">
        <Header />
        <div className="flex-container">
          <div className="card">
            <img
              className="thumbnail-image"
              alt="thumbnail"
              src="https://github.com/sungjinfcc/find-waldo/blob/main/public/assets/background.png"
            />
            <Link to="/game">
              <button type="button">Start</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
