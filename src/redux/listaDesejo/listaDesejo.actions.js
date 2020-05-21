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

export const addLivroListaDesejoStart = (informacoesLivro) => ({
  type: ListaDesejoTypes.ADD_LIVRO_LISTA_DESEJO_START,
  payload: informacoesLivro,
});

export const addLivroListaDesejoSuccess = (novoLivro) => ({
  type: ListaDesejoTypes.ADD_LIVRO_LISTA_DESEJO_SUCCESS,
  payload: novoLivro,
});

export const addLivroListaDesejoFailure = (mensagemErro) => ({
  type: ListaDesejoTypes.ADD_LIVRO_LISTA_DESEJO_FAILURE,
  payload: mensagemErro,
});

export const removerLivroListaDesejo = (remover) => ({
  type: ListaDesejoTypes.REMOVER_LIVRO_LISTA_DESEJO,
  payload: remover,
});
