import {createSelector} from 'reselect';

const selectConcluido = (state) => state.concluido;

export const selectLivrosConcluidos = createSelector(
  [selectConcluido],
  (concluido) =>
    concluido.livros.sort((a, b) => a.finalizadoEm < b.finalizadoEm)
);

export const isLoadingConcluidos = createSelector(
  [selectConcluido],
  (concluido) => concluido.buscando
);

export const selectLivrosConcluidosEsseAno = createSelector(
  [selectLivrosConcluidos],
  (livros) =>
    livros
      ? livros.filter(
          (livro) => livro.anoLido === new Date().getFullYear().toString()
        )
      : []
);

export const selectLivrosConcluidosAnoPassado = createSelector(
  [selectLivrosConcluidos],
  (livros) =>
    livros
      ? livros.filter(
          (livro) => livro.anoLido === (new Date().getFullYear() - 1).toString()
        )
      : []
);
