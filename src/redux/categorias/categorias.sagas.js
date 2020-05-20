import {call, all, put, takeLatest} from 'redux-saga/effects';
import api from '../../services/api';

import {
  buscaCaterogiasSuccess,
  buscaCategoriasFailure,
} from './categorias.actions';
import CategoriasTypes from './categorias.types';

function* buscaCategoriasAsync() {
  try {
    const response = yield api.get('/categories');
    yield put(buscaCaterogiasSuccess(response.data));
  } catch (error) {
    yield put(buscaCategoriasFailure(error.message));
  }
}

export function* buscaCategorias() {
  yield takeLatest(
    CategoriasTypes.BUSCA_CATEGORIAS_START,
    buscaCategoriasAsync
  );
}

export function* categoriasSagas() {
  yield all([call(buscaCategorias)]);
}
