import React from "react";
import "./App.css";
import { startGame } from "./backend/main";

function App() {
  let start = () => {
    startGame();
  }
  return (
    <div className="App">
      <p className="App-Title">Pokémon Catcher</p>
      <p>Start your Pokemon journey here!</p>
      <p>
        Type the sequence of movements you want to take, in order to catch the Pokémon! (N for North, S for South, E for East, W for West)
      </p>

      <button onClick= {start}>Start</button>

      <p id="test"></p>
    </div>
  );
}

export default App;
