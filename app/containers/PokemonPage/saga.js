import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import * as constants from './constants';
import * as actions from './actions';

export default function* pokemonPageSaga() {
  yield takeLatest(constants.GET_POKEMON, getPokemon);
}

export function* getPokemon(action) {
  const requestUrl = `https://pokeapi.co/api/v2/pokemon/${action.name}`;
  try {
    const response = yield call(request, requestUrl);
    yield put(
      actions.getPokemonSuccess(
        response.id,
        `https://pokeres.bastionbot.org/images/pokemon/${response.id}.png`,
        response.weight,
        response.base_experience,
        response.abilities,
        response.types,
        response.moves,
      ),
    );
  } catch (error) {
    yield put(actions.getPokemonError());
  }
}
