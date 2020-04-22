import ConcluidoTypes from './concluido.types';

const INITIAL_STATE = {
  livros: null,
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
    default:
      return state;
  }
};

export default concluidoReducer;
