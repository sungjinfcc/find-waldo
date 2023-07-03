import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">Main</Link>
      <h1>Where-s Waldo?</h1>
      <Link to="/leaderboard">Leaderboard</Link>
    </div>
  );
}

export default Header;
