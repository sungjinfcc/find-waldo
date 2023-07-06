import React from "react";
import { Link } from "react-router-dom";

function Timer({ time }) {
  return (
    <div className="timer">
      <h1>{time}</h1>
      <img className="character minion" src="/assets/minion.png" alt="minion" />
      <img className="character batman" src="/assets/batman.png" alt="batman" />
      <img className="character link" src="/assets/link.jpg" alt="link" />
      <Link to="/">Back</Link>
    </div>
  );
}

export default Timer;
