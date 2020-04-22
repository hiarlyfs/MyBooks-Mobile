import LendoTypes from './lendo.types';

const INITIAL_STATE = {
  livros: [],
  buscando: false,
  mensagemErro: undefined,
};

const lendoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LendoTypes.BUSCA_LENDO_START:
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
      return {
        ...state,
        buscando: false,
        mensagemErro: action.payload,
      };
    default:
      return state;
  }
};

export default lendoReducer;
