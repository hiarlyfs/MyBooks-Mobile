import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import BooksInformation from '../../../components/Books-Information';

import {
  selectLivrosConcluidos,
  isLoadingConcluidos,
} from '../../../redux/concluido/concluido.selectors';
import {buscaConcluidoAsync} from '../../../redux/concluido/concluido.action';

const TodosConcluidos = ({
  buscaConcluidosAsync,
  livrosConcluidos,
  isLoading,
}) => {
  useEffect(() => {
    buscaConcluidosAsync();
  }, []);

  return (
    <BooksInformation
      isLoading={isLoading}
      allBooks={livrosConcluidos}
      titulo="Livros Lidos"
    />
  );
};

const mapStateToProps = createStructuredSelector({
  livrosConcluidos: selectLivrosConcluidos,
  isLoading: isLoadingConcluidos,
});

const mapDispatchToProps = (dispatch) => ({
  buscaConcluidosAsync: () => dispatch(buscaConcluidoAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosConcluidos);
