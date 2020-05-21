import LendoTypes from './lendo.types';
import {addLivro, exluirLivro} from '../livros.utils';

const INITIAL_STATE = {
  livros: [],
  buscando: false,
  mensagemErro: undefined,
};

const lendoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LendoTypes.BUSCA_LENDO_START:
    case LendoTypes.ADD_LENDO_LIVRO_START:
      return {
        ...state,
        buscando: true,
      };
    case LendoTypes.BUSCA_LENDO_SUCCESS:
      return {
        ...state,
        livros: action.payload,
        buscando: false,
      };
    case LendoTypes.BUSCA_LENDO_ERROR:
    case LendoTypes.ADD_LENDO_LIVRO_FAILURE:
      return {
        ...state,
        buscando: false,
        mensagemErro: action.payload,
      };
    case LendoTypes.ADD_LENDO_LIVRO_SUCCESS:
      return {
        ...state,
        livros: addLivro(state.livros, action.payload),
        buscando: false,
      };
    case LendoTypes.REMOVER_LENDO_LIVRO:
      return {
        ...state,
        livros: exluirLivro(state.livros, action.payload),
      };
    default:
      return state;
  }
};

export default lendoReducer;
