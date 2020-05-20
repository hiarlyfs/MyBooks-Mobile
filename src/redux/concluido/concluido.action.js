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

export const addLivroConcluido = (novoLivro) => ({
  type: ConcluidoTypes.ADD_LIVRO_CONCLUIDO,
  payload: novoLivro,
});

export const novoLivroConcluido = (livro) => ({
  type: ConcluidoTypes.NOVO_LIVRO_CONCLUIDO,
  payload: livro,
});

export const removerLivroConcluido = (remover) => ({
  type: ConcluidoTypes.REMOVER_LIVRO_CONCLUIDO,
  payload: remover,
});

export const alterarCategoriaLivroConcluido = (livro) => ({
  type: ConcluidoTypes.ALTERAR_CATEGORIA_LIVRO_CONCLUIDO,
  payload: livro,
});
