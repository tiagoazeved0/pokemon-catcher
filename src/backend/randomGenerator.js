import { pokedex } from './pokedex.js';

export function randomPokemon() {
    return pokedex[Math.floor(Math.random() * pokedex.length)];
};
export function randomLevel() {
    return Math.floor((Math.random() * 100) + 1);
};
