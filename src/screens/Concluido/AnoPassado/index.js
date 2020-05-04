import React from 'react';
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import AllCategoryBooks from '../../../components/AllCategoryBooks';

import {
  selectLivrosConcluidosAnoPassado,
  isLoadingConcluidos,
} from '../../../redux/concluido/concluido.selectors';

const TodosConcluidos = ({livrosConcluidosAnoPassado, isLoading}) => {
  return (
    <AllCategoryBooks
      titlePage="Livros Lidos Ano Passado"
      isLoading={isLoading}
      livros={livrosConcluidosAnoPassado}
      titulo="Livros Lidos"
    />
  );
};

const mapStateToProps = createStructuredSelector({
  livrosConcluidosAnoPassado: selectLivrosConcluidosAnoPassado,
  isLoading: isLoadingConcluidos,
});

export default connect(mapStateToProps)(TodosConcluidos);
