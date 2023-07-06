import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/leaderboard">Leaderboard</Link>
    </div>
  );
}

export default Header;
