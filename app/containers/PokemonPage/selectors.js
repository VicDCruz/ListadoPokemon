import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the pokemonPage state domain
 */

const selectPokemonPageDomain = state => state.pokemonPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PokemonPage
 */

const makeSelectPokemonPage = () =>
  createSelector(
    selectPokemonPageDomain,
    substate => substate,
  );

export default makeSelectPokemonPage;
export { selectPokemonPageDomain };
