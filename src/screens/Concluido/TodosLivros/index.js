import React from 'react';
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import AllCategoryBooks from '../../../components/AllCategoryBooks';

import {
  selectLivrosConcluidos,
  isLoadingConcluidos,
} from '../../../redux/concluido/concluido.selectors';

const TodosConcluidos = ({livrosConcluidos, isLoading}) => {
  return (
    <AllCategoryBooks
      titlePage="Todos os livros Lidos"
      isLoading={isLoading}
      livros={livrosConcluidos}
      titulo="Livros Lidos"
    />
  );
};

const mapStateToProps = createStructuredSelector({
  livrosConcluidos: selectLivrosConcluidos,
  isLoading: isLoadingConcluidos,
});

export default connect(mapStateToProps)(TodosConcluidos);
