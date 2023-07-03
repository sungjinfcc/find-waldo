import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main";
import Leaderboard from "./Components/Leaderboard";
import Game from "./Components/Game";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="game" element={<Game />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

/*
  Components : Header, Main, (Footer)
    Header: Navigation on Main(Logo + Leaderboard), Timer + back when playing
    Main
      load thumbnail
      click to play (start timer)
    Playing
      characer to find at the left bottom (hover to zoom)
      Full screen photo to play with
        click -> get coordinates, check if it's right on the server
          right: leave mark
          wrong: show snackbar
        if found all
          show modal(time, name input, save button)

  Routes: Home, Games(start with 1)
*/
