import { randomPokemon, randomLevel } from "./randomGenerator";

export function move(Player, direction){
    Player.housesVisited.push({...Player.currentPosition});
    switch (direction) {
        case "N":
            Player.currentPosition.y += 1;
            break;
        case "S":
            Player.currentPosition.y -= 1;
            break;
        case "E":
            Player.currentPosition.x += 1;
            break;
        case "W":
            Player.currentPosition.x -= 1;
            break;
      }
}

export function catchPokemon(Player) {
        
    if (!Player.housesVisited.some(p => p.x == Player.currentPosition.x && p.y == Player.currentPosition.y)) {
        let poke = randomPokemon();
        let level = randomLevel();
        Player.counter++;
        
        alert('You caught a Level ' + level + ' ' + poke + ' on Route ' + Object.values(Player.currentPosition) + '!\n')
    } else {
        alert('You have been on Route ' + Object.values(Player.currentPosition) + ' already!')
    }
}

