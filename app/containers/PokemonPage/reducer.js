/*
 *
 * PokemonPage reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  loading: false,
  error: false,
  id: 0,
  name: '',
  img: '',
  weight: '',
  abilities: [],
  types: [],
  moves: [],
};

/* eslint-disable default-case, no-param-reassign */
const pokemonPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.GET_POKEMON:
        draft.loading = true;
        draft.error = false;
        break;
      case constants.GET_POKEMON_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.id = action.id;
        draft.name = action.name;
        draft.img = action.img;
        draft.weight = action.weight;
        draft.abilities = action.abilities;
        draft.baseExperience = action.baseExperience;
        draft.types = action.types;
        draft.moves = action.moves;
        break;
      case constants.GET_POKEMON_ERROR:
        draft.loading = false;
        draft.error = true;
        break;
      default:
        return draft;
    }
    return draft;
  });

export default pokemonPageReducer;
