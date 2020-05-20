import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import AllCategoryBooks from '../../../components/AllCategoryBooks';

import {
  selectLivrosConcluidosEsseAno,
  isLoadingConcluidos,
} from '../../../redux/concluido/concluido.selectors';
import {buscaConcluidoStart} from '../../../redux/concluido/concluido.action';

const TodosConcluidos = ({
  buscaConcluidos,
  livrosConcluidosEsseAno,
  isLoading,
}) => {
  useEffect(() => {
    buscaConcluidos();
  }, []);

  return (
    <AllCategoryBooks
      titlePage="Livros Lidos Esse Ano"
      isLoading={isLoading}
      livros={livrosConcluidosEsseAno}
      titulo="Livros Lidos"
    />
  );
};

const mapStateToProps = createStructuredSelector({
  livrosConcluidosEsseAno: selectLivrosConcluidosEsseAno,
  isLoading: isLoadingConcluidos,
});

const mapDispatchToProps = (dispatch) => ({
  buscaConcluidos: () => dispatch(buscaConcluidoStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosConcluidos);
