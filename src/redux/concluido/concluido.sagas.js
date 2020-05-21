import {call, put, takeEvery, all, takeLatest} from 'redux-saga/effects';

import api from '../../services/api';

import {
  buscaConcluidoSuccess,
  buscaConcluidoFailure,
  addLivroConcluidoFailure,
  addLivroConcluidoSuccess,
} from './concluido.action';
import ConcluidoTyps from './concluido.types';

import {exluirLendoLivro} from '../lendo/lendo.action';
import {removerLivroListaDesejo} from '../listaDesejo/listaDesejo.actions';

function* buscaLivrosConcluido() {
  try {
    const response = yield api.get(`/livrosLidos`);
    yield put(buscaConcluidoSuccess(response.data));
  } catch (error) {
    yield put(buscaConcluidoFailure(error.message));
  }
}

function* onAddNovoLivro({payload}) {
  try {
    const response = yield call(api.post, '/books', {
      ...payload,
      status: 'FINALIZADO',
    });

    if (response.data.novo) {
      yield put(exluirLendoLivro(response.data.livro));
      yield put(removerLivroListaDesejo(response.data.livro));
    }
    yield put(addLivroConcluidoSuccess(response.data.livro));
  } catch (error) {
    yield put(addLivroConcluidoFailure(error.message));
  }
}

export function* buscaConcluidoAsync() {
  yield takeLatest(ConcluidoTyps.BUSCA_CONCLUIDO_START, buscaLivrosConcluido);
}

export function* addNovoLivroConcluido() {
  yield takeEvery(ConcluidoTyps.ADD_LIVRO_CONCLUIDO_START, onAddNovoLivro);
}

export function* concluidoSagas() {
  yield all([call(buscaConcluidoAsync), call(addNovoLivroConcluido)]);
}
