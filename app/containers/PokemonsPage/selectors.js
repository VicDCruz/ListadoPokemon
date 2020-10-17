import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the pokemonsPage state domain
 */

const selectPokemonsPageDomain = state => state.pokemonsPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PokemonsPage
 */

const makeSelectPokemonsPage = () =>
  createSelector(
    selectPokemonsPageDomain,
    substate => substate,
  );

export default makeSelectPokemonsPage;
export { selectPokemonsPageDomain };
