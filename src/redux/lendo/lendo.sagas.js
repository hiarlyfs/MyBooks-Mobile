import {takeEvery, put, call, all} from 'redux-saga/effects';
import api from '../../services/api';

import {
  buscaLendoSuccess,
  buscaLendoFailure,
  exluirLendoLivro,
  novoLendoLivro,
} from './lendo.action';

import {removerLivroConcluido} from '../concluido/concluido.action';
import {removerLivroListaDesejo} from '../listaDesejo/listaDesejo.actions';

import LendoTypes from './lendo.types';

export function* buscaLendoAsync() {
  try {
    const response = yield api.get('/livrosLendo');
    yield put(buscaLendoSuccess(response.data));
  } catch (error) {
    yield put(buscaLendoFailure(error.message));
  }
}

export function* onAlterarCategoria({payload}) {
  yield put(exluirLendoLivro(payload));
  yield put(novoLendoLivro(payload));
}

export function* onAddLivro({payload}) {
  yield put(removerLivroConcluido(payload));
  yield put(removerLivroListaDesejo(payload));
  yield put(novoLendoLivro(payload));
}

export function* buscaLendo() {
  yield takeEvery(LendoTypes.BUSCA_LENDO_START, buscaLendoAsync);
}

export function* addNovoLendoLivro() {
  yield takeEvery(LendoTypes.ADD_LENDO_LIVRO, onAddLivro);
}

export function* alterarCategoriaLivroLendo() {
  yield takeEvery(LendoTypes.ALTERAR_CATEGORIA_LENDO, onAlterarCategoria);
}

export function* lendoSagas() {
  yield all([
    call(buscaLendo),
    call(alterarCategoriaLivroLendo),
    call(addNovoLendoLivro),
  ]);
}
