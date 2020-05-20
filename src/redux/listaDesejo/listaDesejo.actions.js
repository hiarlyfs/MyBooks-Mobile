import ListaDesejoTypes from './listaDesejo.types';

export const buscaListaDesejoStart = () => ({
  type: ListaDesejoTypes.BUSCA_LISTA_DESEJO_START,
});

export const buscaListaDesejoSuccess = (livros) => ({
  type: ListaDesejoTypes.BUSCA_LISTA_DESEJO_SUCCESS,
  payload: livros,
});

export const buscaListaDesejoFailure = (mensagemErro) => ({
  type: ListaDesejoTypes.BUSCA_LISTA_DESEJO_ERROR,
  payload: mensagemErro,
});

export const addLivroListaDesejo = (novoLivro) => ({
  type: ListaDesejoTypes.ADD_LIVRO_LISTA_DESEJO,
  payload: novoLivro,
});

export const removerLivroListaDesejo = (remover) => ({
  type: ListaDesejoTypes.REMOVER_LIVRO_LISTA_DESEJO,
  payload: remover,
});

export const novoLivroListaDesejo = (livro) => ({
  type: ListaDesejoTypes.NOVO_LIVRO_LISTA_DESEJO,
  payload: livro,
});

export const alterarCategoria = (livro) => ({
  type: ListaDesejoTypes.ALTERAR_CATEGORIA_LIVRO_LISTA_DESEJO,
  payload: livro,
});
