import CategoriasTypes from './categorias.types';
import api from '../../services/api';

export const buscaCategoriasStart = () => ({
  type: CategoriasTypes.BUSCA_CATEGORIAS_START,
});

export const buscaCategoriasFailure = (mensagemError) => ({
  type: CategoriasTypes.BUSCA_CATEGORIAS_FAILURE,
  payload: mensagemError,
});

export const buscaCaterogiasSuccess = (categorias) => ({
  type: CategoriasTypes.BUSCA_CATEGORIAS_SUCCESS,
  payload: categorias,
});

export const buscaCategoriasAsync = () => {
  return (dispatch) => {
    dispatch(buscaCategoriasStart());

    api
      .get('/categories')
      .then((response) => dispatch(buscaCaterogiasSuccess(response.data)))
      .catch((error) => dispatch(buscaCategoriasFailure(error.message)));
  };
};
