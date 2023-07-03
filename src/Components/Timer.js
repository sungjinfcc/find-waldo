import React from "react";
import { Link } from "react-router-dom";

function Timer() {
  return (
    <div className="timer">
      <h1>Timer</h1>
      <Link to="/">Back</Link>
    </div>
  );
}

export default Timer;
