import ConcluidoTypes from './concluido.types';
import {addLivro, exluirLivro} from '../livros.utils';

const INITIAL_STATE = {
  livros: [],
  buscando: false,
  mensagemErro: undefined,
};

const concluidoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ConcluidoTypes.BUSCA_CONCLUIDO_START:
      return {
        ...state,
        buscando: true,
      };
    case ConcluidoTypes.BUSCA_CONCLUIDO_SUCCESS:
      return {
        ...state,
        livros: action.payload,
        buscando: false,
      };
    case ConcluidoTypes.BUSCA_CONCLUIDO_ERROR:
      return {
        ...state,
        messagemError: action.payload,
        buscando: false,
      };
    case ConcluidoTypes.NOVO_LIVRO_CONCLUIDO:
      return {
        ...state,
        livros: addLivro(state.livros, action.payload),
      };
    case ConcluidoTypes.REMOVER_LIVRO_CONCLUIDO:
      return {
        ...state,
        livros: exluirLivro(state.livros, action.payload),
      };
    default:
      return state;
  }
};

export default concluidoReducer;
