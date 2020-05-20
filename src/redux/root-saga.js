import {call, all} from 'redux-saga/effects';

import {lendoSagas} from './lendo/lendo.sagas';
import {concluidoSagas} from './concluido/concluido.sagas';
import {listaDesejoSagas} from './listaDesejo/listaDesejo.sagas';
import {categoriasSagas} from './categorias/categorias.sagas';

export default function* rootsaga() {
  yield all([
    call(lendoSagas),
    call(concluidoSagas),
    call(listaDesejoSagas),
    call(categoriasSagas),
  ]);
}
