import ConcluidoTypes from './concluido.types';
import {addLivro, exluirLivro, addLivrosInciais} from '../livros.utils';

const INITIAL_STATE = {
  livros: [],
  buscando: false,
  mensagemErro: undefined,
};

const concluidoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ConcluidoTypes.BUSCA_CONCLUIDO_START:
    case ConcluidoTypes.ADD_LIVRO_CONCLUIDO_START:
      return {
        ...state,
        buscando: true,
      };
    case ConcluidoTypes.BUSCA_CONCLUIDO_SUCCESS:
      return {
        ...state,
        livros: addLivrosInciais([...state.livros, ...action.payload]),
        buscando: false,
      };
    case ConcluidoTypes.BUSCA_CONCLUIDO_ERROR:
    case ConcluidoTypes.ADD_LIVRO_CONCLUIDO_FAILURE:
      return {
        ...state,
        messagemError: action.payload,
        buscando: false,
      };
    case ConcluidoTypes.ADD_LIVRO_CONCLUIDO_SUCCESS:
      return {
        ...state,
        livros: addLivro(state.livros, action.payload),
        buscando: false,
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
