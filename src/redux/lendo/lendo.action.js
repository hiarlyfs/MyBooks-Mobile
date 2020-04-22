import LendoTypes from './lendo.types';
import api from '../../services/api';

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

export const buscaLendoAsync = () => {
  return (dispatch) => {
    dispatch(buscaLendoStart());
    api
      .get('/livrosLendo')
      .then((response) => dispatch(buscaLendoSuccess(response.data)))
      .catch((error) => dispatch(buscaLendoFailure(error.message)));
  };
};
