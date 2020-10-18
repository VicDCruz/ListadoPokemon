/*
 *
 * PokemonPage actions
 *
 */

import * as constants from './constants';

export function getPokemon(name) {
  return {
    type: constants.GET_POKEMON,
    name,
  };
}

export function getPokemonSuccess(id, img, weight, abilities, types, moves) {
  return {
    type: constants.GET_POKEMON_SUCCESS,
    abilities,
    types,
    moves,
    id,
    img,
    weight,
  };
}

export function getPokemonError() {
  return {
    type: constants.GET_POKEMON_ERROR,
  };
}
