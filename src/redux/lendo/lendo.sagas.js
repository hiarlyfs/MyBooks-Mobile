import {takeEvery, put, call, all, takeLatest} from 'redux-saga/effects';
import NetInfo from '@react-native-community/netinfo';

import {
  addLivroRealm,
  gravarLivrosIncialRealm,
  pegarLivrosRealm,
} from '../livros.utils';

import api from '../../services/api';

import {
  buscaLendoSuccess,
  buscaLendoFailure,
  addLendoLivroSuccess,
  addLendoLivroFailure,
} from './lendo.action';

import {removerLivroConcluido} from '../concluido/concluido.action';
import {removerLivroListaDesejo} from '../listaDesejo/listaDesejo.actions';

import LendoTypes from './lendo.types';

export function* buscaLendoAsync() {
  try {
    const connection = yield NetInfo.fetch();
    if (!connection.isConnected) {
      const response = yield call(pegarLivrosRealm, 'LENDO');
      yield put(buscaLendoSuccess(response));
    } else {
      const response = yield api.get('/livrosLendo');
      yield call(gravarLivrosIncialRealm, response.data, 'LENDO');
      yield put(buscaLendoSuccess(response.data));
    }
  } catch (error) {
    yield put(buscaLendoFailure(error.message));
  }
}

export function* onAddLivro({payload}) {
  try {
    const response = yield call(api.post, '/books', {
      ...payload,
      status: 'LENDO',
    });

    if (response.data.novo) {
      yield put(removerLivroConcluido(response.data.livro));
      yield put(removerLivroListaDesejo(response.data.livro));
    }
    yield put(addLendoLivroSuccess(response.data.livro));
    yield call(addLivroRealm, response.data.livro);
  } catch (error) {
    yield put(addLendoLivroFailure(error.message));
  }
}

export function* buscaLendo() {
  yield takeLatest(LendoTypes.BUSCA_LENDO_START, buscaLendoAsync);
}

export function* addNovoLendoLivro() {
  yield takeEvery(LendoTypes.ADD_LENDO_LIVRO_START, onAddLivro);
}

export function* lendoSagas() {
  yield all([call(buscaLendo), call(addNovoLendoLivro)]);
}
