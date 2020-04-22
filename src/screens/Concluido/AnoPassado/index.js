import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import BooksInformation from '../../../components/Books-Information';

import {
  selectLivrosConcluidosAnoPassado,
  isLoadingConcluidos,
} from '../../../redux/concluido/concluido.selectors';
import {buscaConcluidoAsync} from '../../../redux/concluido/concluido.action';

const TodosConcluidos = ({
  buscaConcluidosAsync,
  livrosConcluidosAnoPassado,
  isLoading,
}) => {
  useEffect(() => {
    buscaConcluidosAsync();
  }, []);

  return (
    <BooksInformation
      isLoading={isLoading}
      allBooks={livrosConcluidosAnoPassado}
      titulo="Livros Lidos"
    />
  );
};

const mapStateToProps = createStructuredSelector({
  livrosConcluidosAnoPassado: selectLivrosConcluidosAnoPassado,
  isLoading: isLoadingConcluidos,
});

const mapDispatchToProps = (dispatch) => ({
  buscaConcluidosAsync: () => dispatch(buscaConcluidoAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosConcluidos);
