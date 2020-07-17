import {
  move,
  catchPokemon,
} from "./playerActions";

import { Player } from "./newPlayer";

export function startGame() {

  const player = new Player();

  player.userInput();
  player.validateInput();

  catchPokemon(player)
  
  for (let i = 0; i < player.answer.length; i++) {
    
    move(player, player.answer[i])
    catchPokemon(player)
  }
  alert("You caught: " + player.counter + " Pokemon!");
}

