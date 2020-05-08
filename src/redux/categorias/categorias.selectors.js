import {createSelector} from 'reselect';

export const selectCategorias = (state) => state.categorias;

export const selectTodasCategorias = createSelector(
  [selectCategorias],
  (categorias) => categorias.categorias.sort((a, b) => a.nome > b.nome)
);

export const selectCategoriaIsLoading = createSelector(
  [selectCategorias],
  (categorias) => categorias.buscando
);

export const selectNomeCategorias = createSelector(
  [selectTodasCategorias],
  (categorias) => categorias.map((categoria) => categoria.nome)
);
