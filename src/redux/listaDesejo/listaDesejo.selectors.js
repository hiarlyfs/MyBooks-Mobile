import {createSelector} from 'reselect';

const selectListaDesejo = (state) => state.listaDesejo;

export const selectLivrosListaDesejo = createSelector(
  [selectListaDesejo],
  (listaDesejo) => listaDesejo.livros.sort((a, b) => a.titulo > b.titulo)
);

export const isLoadingListaDesejo = createSelector(
  [selectListaDesejo],
  (listaDesejo) => listaDesejo.buscando
);
