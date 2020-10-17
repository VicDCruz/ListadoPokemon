import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import * as constants from './constants';
import * as actions from './actions';

export default function* pokemonsPageSaga() {
  yield takeLatest(constants.GET_POKEMONS, getPokemons);
}

export function* getPokemons(action) {
  const requestUrl = `https://pokeapi.co/api/v2/pokemon?limit=${
    action.limit
  }&offset=${action.offset}`;
  try {
    const response = yield call(request, requestUrl);
    yield put(
      actions.getPokemonsSuccess(
        response.results.map((pokemon, i) => ({
          ...pokemon,
          id: action.offset + i + 1,
          img: `https://pokeres.bastionbot.org/images/pokemon/${action.offset + i + 1}.png`,
        })),
        response.count,
      ),
    );
  } catch (error) {
    yield put(actions.getPokemonsError());
  }
}
