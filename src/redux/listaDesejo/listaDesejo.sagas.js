import {takeEvery, all, call, put, takeLatest} from 'redux-saga/effects';
import api from '../../services/api';

import {
  buscaListaDesejoSuccess,
  buscaListaDesejoFailure,
  novoLivroListaDesejo,
  removerLivroListaDesejo,
} from './listaDesejo.actions';
import ListaDesejoTypes from './listaDesejo.types';

import {removerLivroConcluido} from '../concluido/concluido.action';
import {exluirLendoLivro} from '../lendo/lendo.action';

function* buscaListaDesejoAsync() {
  try {
    const response = yield api.get('/listaDesejos');
    yield put(buscaListaDesejoSuccess(response.data));
  } catch (error) {
    yield put(buscaListaDesejoFailure(error.message));
  }
}

function* onAddNovoLivroDesejo({payload}) {
  yield put(removerLivroConcluido(payload));
  yield put(exluirLendoLivro(payload));
  yield put(novoLivroListaDesejo(payload));
}

function* onAlterarCategoriaLivro({payload}) {
  yield put(removerLivroListaDesejo(payload));
  yield put(novoLivroListaDesejo(payload));
}

export function* buscaLivrosListaDesejo() {
  yield takeLatest(
    ListaDesejoTypes.BUSCA_LISTA_DESEJO_START,
    buscaListaDesejoAsync
  );
}

export function* addNovoLivroListaDesejo() {
  yield takeEvery(
    ListaDesejoTypes.ADD_LIVRO_LISTA_DESEJO,
    onAddNovoLivroDesejo
  );
}

export function* alterarCategoriaLivroDesejo() {
  yield takeEvery(
    ListaDesejoTypes.ALTERAR_CATEGORIA_LIVRO_LISTA_DESEJO,
    onAlterarCategoriaLivro
  );
}

export function* listaDesejoSagas() {
  yield all([
    call(buscaLivrosListaDesejo),
    call(addNovoLivroListaDesejo),
    call(alterarCategoriaLivroDesejo),
  ]);
}
