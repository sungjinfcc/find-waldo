import React from "react";
import { Link } from "react-router-dom";

function Timer({ time }) {
  return (
    <div className="timer">
      <h1>{time}</h1>
      <Link to="/">Back</Link>
    </div>
  );
}

export default Timer;
