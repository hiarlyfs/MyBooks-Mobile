import ListaDesejoTypes from './listaDesejo.types';
import {addLivro, exluirLivro, addLivrosInciais} from '../livros.utils';

const INITIAL_STATE = {
  livros: [],
  buscando: false,
  mensagemErro: undefined,
};

const listaDesejoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ListaDesejoTypes.BUSCA_LISTA_DESEJO_START:
    case ListaDesejoTypes.ADD_LIVRO_LISTA_DESEJO_START:
      return {
        ...state,
        buscando: true,
      };
    case ListaDesejoTypes.BUSCA_LISTA_DESEJO_SUCCESS:
      return {
        ...state,
        livros: addLivrosInciais([...state.livros, ...action.payload]),
        buscando: false,
      };
    case ListaDesejoTypes.BUSCA_LISTA_DESEJO_ERROR:
    case ListaDesejoTypes.ADD_LIVRO_LISTA_DESEJO_FAILURE:
      return {
        ...state,
        buscando: false,
        mensagemErro: action.payload,
      };
    case ListaDesejoTypes.ADD_LIVRO_LISTA_DESEJO_SUCCESS:
      return {
        ...state,
        livros: addLivro(state.livros, action.payload),
        buscando: false,
      };
    case ListaDesejoTypes.REMOVER_LIVRO_LISTA_DESEJO:
      return {
        ...state,
        livros: exluirLivro(state.livros, action.payload),
      };
    default: {
      return state;
    }
  }
};

export default listaDesejoReducer;
