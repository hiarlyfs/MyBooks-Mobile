import ListaDesejoTypes from './listaDesejo.types';
import api from '../../services/api';

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

export const buscaListaDesejoAsync = () => {
  return (dispatch) => {
    dispatch(buscaListaDesejoStart());

    api
      .get('/listaDesejos')
      .then((response) => dispatch(buscaListaDesejoSuccess(response.data)))
      .catch((error) => dispatch(buscaListaDesejoFailure(error.message)));
  };
};

export const addLivroListaDesejo = (novoLivro) => ({
  type: ListaDesejoTypes.ADD_LIVRO_LISTA_DESEJO,
  payload: novoLivro,
});

export const removerLivroListaDesejo = (remover) => ({
  type: ListaDesejoTypes.REMOVER_LIVRO_LISTA_DESEJO,
  payload: remover,
});
