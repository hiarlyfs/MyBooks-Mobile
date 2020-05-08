import CategoriasTypes from './categorias.types';

const INITIAL_STATE = {
  categorias: [],
  buscando: false,
  mensagemError: undefined,
};

const CategoriasReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoriasTypes.BUSCA_CATEGORIAS_START:
      return {
        ...state,
        buscando: true,
      };
    case CategoriasTypes.BUSCA_CATEGORIAS_SUCCESS:
      return {
        ...state,
        buscando: false,
        categorias: action.payload,
        mensagemError: undefined,
      };
    case CategoriasTypes.BUSCA_CATEGORIAS_FAILURE:
      return {
        ...state,
        mensagemError: action.payload,
      };
    case CategoriasTypes.ADD_CATEGORIA:
      return {
        ...state,
        categorias: [...state.categorias, action.payload],
      };
    default:
      return state;
  }
};

export default CategoriasReducer;
