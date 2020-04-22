import {combineReducers} from 'redux';

import concluidoReducer from './concluido/concluido.reducer';
import lendoReducer from './lendo/lendo.reducer';
import listaDesejoReducer from './listaDesejo/listaDesejo.reducer';

const rootReducer = combineReducers({
  concluido: concluidoReducer,
  lendo: lendoReducer,
  listaDesejo: listaDesejoReducer,
});

export default rootReducer;
