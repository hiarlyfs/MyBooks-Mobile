import ConcluidoTypes from './concluido.types';
import api from '../../services/api';

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

export const buscaConcluidoAsync = () => {
  return (dispatch) => {
    dispatch(buscaConcluidoStart());

    api
      .get(`/livrosLidos`)
      .then((response) => dispatch(buscaConcluidoSuccess(response.data)))
      .catch((error) => dispatch(buscaConcluidoFailure(error.message)));
  };
};
