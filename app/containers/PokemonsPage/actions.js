/*
 *
 * PokemonsPage actions
 *
 */

import * as constants from './constants';

export function getPokemons(limit, offset) {
  return {
    type: constants.GET_POKEMONS,
    limit,
    offset,
  };
}

export function getPokemonsSuccess(rows, count) {
  return {
    type: constants.GET_POKEMONS_SUCCESS,
    rows,
    count,
  };
}

export function getPokemonsError() {
  return {
    type: constants.GET_POKEMONS_ERROR,
  };
}
