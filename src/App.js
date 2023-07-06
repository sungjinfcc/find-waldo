import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import connectFirebase from "./Components/firebase";
import Main from "./Components/Main";
import Leaderboard from "./Components/Leaderboard";
import Game from "./Components/Game";

function App() {
  const firebase = connectFirebase();
  const [records, setRecords] = useState([]);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="leaderboard"
          element={
            <Leaderboard
              records={records}
              setRecords={setRecords}
              firebase={firebase}
            />
          }
        />
        <Route path="game" element={<Game addRecord={firebase.addRecord} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

/*
  Playing
    characer to find at top (hover to zoom)
      click 
        right: leave mark
        wrong: show snackbar
*/
