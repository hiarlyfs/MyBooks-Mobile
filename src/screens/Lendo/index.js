import React, {useEffect} from 'react';
import {createStructuredSelector} from 'reselect';

import {connect} from 'react-redux';
import {
  selectLivrosLendo,
  isLoadingLendo,
} from '../../redux/lendo/lendo.selectors';
import {buscaLendoStart} from '../../redux/lendo/lendo.action';
import AllCategoryBooks from '../../components/AllCategoryBooks';

const Lendo = ({buscaLendo, livrosLendo, isLoading}) => {
  useEffect(() => {
    buscaLendo();
  }, []);

  return (
    <AllCategoryBooks
      titlePage="Lendo"
      isLoading={isLoading}
      livros={livrosLendo}
      titulo="Livros lidos"
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  buscaLendo: () => dispatch(buscaLendoStart()),
});

const mapStateToProps = createStructuredSelector({
  livrosLendo: selectLivrosLendo,
  isLoading: isLoadingLendo,
});

export default connect(mapStateToProps, mapDispatchToProps)(Lendo);
