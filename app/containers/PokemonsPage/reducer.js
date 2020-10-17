/*
 *
 * PokemonsPage reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  loading: false,
  error: false,
  rows: [],
  count: 0,
};

/* eslint-disable default-case, no-param-reassign */
const pokemonsPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.GET_POKEMONS:
        draft.loading = true;
        draft.error = false;
        draft.rows = [];
        break;
      case constants.GET_POKEMONS_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.rows = action.rows;
        draft.count = action.count;
        break;
      case constants.GET_POKEMONS_ERROR:
        draft.loading = false;
        draft.error = true;
        draft.rows = [];
        draft.count = 0;
        break;
      default:
        return draft;
    }
    return draft;
  });

export default pokemonsPageReducer;
