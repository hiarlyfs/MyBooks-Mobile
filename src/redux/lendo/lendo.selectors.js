import {createSelector} from 'reselect';

export const selectLendo = (state) => state.lendo;

export const selectLivrosLendo = createSelector(
  [selectLendo],
  (lendo) => lendo.livros
);

export const isLoadingLendo = createSelector(
  [selectLendo],
  (lendo) => lendo.buscando
);
