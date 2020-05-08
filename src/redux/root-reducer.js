import {combineReducers} from 'redux';

import concluidoReducer from './concluido/concluido.reducer';
import lendoReducer from './lendo/lendo.reducer';
import listaDesejoReducer from './listaDesejo/listaDesejo.reducer';
import categoriasReducer from './categorias/categorias.reducers';

const rootReducer = combineReducers({
  concluido: concluidoReducer,
  lendo: lendoReducer,
  listaDesejo: listaDesejoReducer,
  categorias: categoriasReducer,
});

export default rootReducer;
