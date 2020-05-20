import CategoriasTypes from './categorias.types';

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

export const addCategoria = (novaCategoria) => ({
  type: CategoriasTypes.ADD_CATEGORIA,
  payload: novaCategoria,
});
