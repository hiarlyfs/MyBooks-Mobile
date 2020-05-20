import {call, put, takeEvery, all} from 'redux-saga/effects';
import api from '../../services/api';

import {
  buscaConcluidoSuccess,
  buscaConcluidoFailure,
  novoLivroConcluido,
  removerLivroConcluido,
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
  yield put(exluirLendoLivro(payload));
  yield put(removerLivroListaDesejo(payload));
  yield put(novoLivroConcluido(payload));
}

function* onAlterarCategoriaLivro({payload}) {
  yield put(removerLivroConcluido(payload));
  yield put(novoLivroConcluido(payload));
}

export function* buscaConcluidoAsync() {
  yield takeEvery(ConcluidoTyps.BUSCA_CONCLUIDO_START, buscaLivrosConcluido);
}

export function* addNovoLivroConcluido() {
  yield takeEvery(ConcluidoTyps.ADD_LIVRO_CONCLUIDO, onAddNovoLivro);
}

export function* alterarCategoriaLivro() {
  yield takeEvery(
    ConcluidoTyps.ALTERAR_CATEGORIA_LIVRO_CONCLUIDO,
    onAlterarCategoriaLivro
  );
}

export function* concluidoSagas() {
  yield all([
    call(buscaConcluidoAsync),
    call(addNovoLivroConcluido),
    call(alterarCategoriaLivro),
  ]);
}
