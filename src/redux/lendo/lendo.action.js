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

export const novoLendoLivro = (livro) => ({
  type: LendoTypes.NOVO_LENDO_LIVRO,
  payload: livro,
});

export const addLendoLivro = (novoLivro) => ({
  type: LendoTypes.ADD_LENDO_LIVRO,
  payload: novoLivro,
});

export const exluirLendoLivro = (remover) => ({
  type: LendoTypes.REMOVER_LENDO_LIVRO,
  payload: remover,
});

export const alterarCategoriaLivroLendo = (livro) => ({
  type: LendoTypes.ALTERAR_CATEGORIA_LENDO,
  payload: livro,
});
