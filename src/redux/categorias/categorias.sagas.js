import NetInfo from '@react-native-community/netinfo';
import {call, all, put, takeLatest} from 'redux-saga/effects';

import getRealm from '../../services/realm';
import api from '../../services/api';

import {
  buscaCaterogiasSuccess,
  buscaCategoriasFailure,
} from './categorias.actions';
import CategoriasTypes from './categorias.types';

function* gravarCategoriasInicialRealm(categorias) {
  try {
    const realm = yield getRealm();
    const todasCategorias = realm.objects('Categoria');
    if (!todasCategorias[0]) {
      categorias.forEach((categoria) => {
        realm.write(() => {
          realm.create('Categoria', categoria);
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
}

function* pegarCategoriasRealm() {
  try {
    const realm = yield getRealm();
    const categorias = realm.objects('Categoria');
    return [...categorias];
  } catch (error) {
    console.log(error);
  }
}

function* buscaCategoriasAsync() {
  try {
    const connection = yield NetInfo.fetch();
    if (!connection.isConnected) {
      const response = yield pegarCategoriasRealm();
      yield put(buscaCaterogiasSuccess(response));
    } else {
      const response = yield api.get('/categories');
      yield call(gravarCategoriasInicialRealm, response.data);
      yield put(buscaCaterogiasSuccess(response.data));
    }
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
