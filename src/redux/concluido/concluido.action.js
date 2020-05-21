import ConcluidoTypes from './concluido.types';

export const buscaConcluidoStart = () => ({
  type: ConcluidoTypes.BUSCA_CONCLUIDO_START,
});

export const buscaConcluidoSuccess = (livros) => ({
  type: ConcluidoTypes.BUSCA_CONCLUIDO_SUCCESS,
  payload: livros,
});

export const buscaConcluidoFailure = (messagemErro) => ({
  type: ConcluidoTypes.BUSCA_CONCLUIDO_ERROR,
  payload: messagemErro,
});

export const addLivroConcluidoStart = (informacoesLivro) => ({
  type: ConcluidoTypes.ADD_LIVRO_CONCLUIDO_START,
  payload: informacoesLivro,
});

export const addLivroConcluidoFailure = (error) => ({
  type: ConcluidoTypes.ADD_LIVRO_CONCLUIDO_FAILURE,
  payload: error,
});

export const addLivroConcluidoSuccess = (livro) => ({
  type: ConcluidoTypes.ADD_LIVRO_CONCLUIDO_SUCCESS,
  payload: livro,
});

export const removerLivroConcluido = (remover) => ({
  type: ConcluidoTypes.REMOVER_LIVRO_CONCLUIDO,
  payload: remover,
});
