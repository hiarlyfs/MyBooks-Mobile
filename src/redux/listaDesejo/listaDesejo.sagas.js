import {takeEvery, all, call, put, takeLatest} from 'redux-saga/effects';
import NetInfo from '@react-native-community/netinfo';

import {
  addLivroRealm,
  gravarLivrosIncialRealm,
  pegarLivrosRealm,
} from '../livros.utils';

import api from '../../services/api';

import {
  buscaListaDesejoSuccess,
  buscaListaDesejoFailure,
  addLivroListaDesejoSuccess,
  addLivroListaDesejoFailure,
} from './listaDesejo.actions';
import ListaDesejoTypes from './listaDesejo.types';

import {removerLivroConcluido} from '../concluido/concluido.action';
import {exluirLendoLivro} from '../lendo/lendo.action';

function* buscaListaDesejoAsync() {
  try {
    const connection = yield NetInfo.fetch();
    if (!connection.isConnected) {
      const response = yield call(pegarLivrosRealm, 'LISTA DE DESEJOS');
      yield put(buscaListaDesejoSuccess(response));
    } else {
      const response = yield api.get('/listaDesejos');
      yield call(gravarLivrosIncialRealm, response.data, 'LISTA DE DESEJOS');
      yield put(buscaListaDesejoSuccess(response.data));
    }
  } catch (error) {
    yield put(buscaListaDesejoFailure(error.message));
  }
}

function* onAddNovoLivroDesejo({payload}) {
  try {
    const response = yield call(api.post, '/books', {
      ...payload,
      status: 'LISTA DE DESEJOS',
    });

    if (response.data.novo) {
      yield put(removerLivroConcluido(response.data.livro));
      yield put(exluirLendoLivro(response.data.livro));
    }
    yield call(addLivroRealm, response.data.livro);
    yield put(addLivroListaDesejoSuccess(response.data.livro));
  } catch (error) {
    yield put(addLivroListaDesejoFailure(error.message));
  }
}

export function* buscaLivrosListaDesejo() {
  yield takeLatest(
    ListaDesejoTypes.BUSCA_LISTA_DESEJO_START,
    buscaListaDesejoAsync
  );
}

export function* addNovoLivroListaDesejo() {
  yield takeEvery(
    ListaDesejoTypes.ADD_LIVRO_LISTA_DESEJO_START,
    onAddNovoLivroDesejo
  );
}

export function* listaDesejoSagas() {
  yield all([call(buscaLivrosListaDesejo), call(addNovoLivroListaDesejo)]);
}
