import {createSelector} from 'reselect';

export const selectCategorias = (state) => state.categorias;

export const selectTodasCategorias = createSelector(
  [selectCategorias],
  (categorias) => categorias.categorias
);

export const selectNomeCategorias = createSelector(
  [selectTodasCategorias],
  (categorias) => categorias.map((categoria) => categoria.nome)
);
