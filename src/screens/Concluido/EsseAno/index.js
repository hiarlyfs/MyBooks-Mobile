import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import BooksInformation from '../../../components/Books-Information';

import {
  selectLivrosConcluidosEsseAno,
  isLoadingConcluidos,
} from '../../../redux/concluido/concluido.selectors';
import {buscaConcluidoAsync} from '../../../redux/concluido/concluido.action';

const TodosConcluidos = ({
  buscaConcluidosAsync,
  livrosConcluidosEsseAno,
  isLoading,
}) => {
  useEffect(() => {
    buscaConcluidosAsync();
  }, []);

  return (
    <BooksInformation
      isLoading={isLoading}
      allBooks={livrosConcluidosEsseAno}
      titulo="Livros Lidos"
    />
  );
};

const mapStateToProps = createStructuredSelector({
  livrosConcluidosEsseAno: selectLivrosConcluidosEsseAno,
  isLoading: isLoadingConcluidos,
});

const mapDispatchToProps = (dispatch) => ({
  buscaConcluidosAsync: () => dispatch(buscaConcluidoAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosConcluidos);
