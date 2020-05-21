import LendoTypes from './lendo.types';

export const buscaLendoStart = () => ({
  type: LendoTypes.BUSCA_LENDO_START,
});

export const buscaLendoSuccess = (livros) => ({
  type: LendoTypes.BUSCA_LENDO_SUCCESS,
  payload: livros,
});

export const buscaLendoFailure = (messagemErro) => ({
  type: LendoTypes.BUSCA_LENDO_ERROR,
  payload: messagemErro,
});

export const addLendoLivroStart = (informacoesLivro) => ({
  type: LendoTypes.ADD_LENDO_LIVRO_START,
  payload: informacoesLivro,
});

export const addLendoLivroSuccess = (livro) => ({
  type: LendoTypes.ADD_LENDO_LIVRO_SUCCESS,
  payload: livro,
});

export const addLendoLivroFailure = (mensagemErro) => ({
  type: LendoTypes.ADD_LENDO_LIVRO_FAILURE,
  payload: mensagemErro,
});

export const exluirLendoLivro = (remover) => ({
  type: LendoTypes.REMOVER_LENDO_LIVRO,
  payload: remover,
});
