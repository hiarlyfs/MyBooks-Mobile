import React, {useEffect} from 'react';
import {createStructuredSelector} from 'reselect';

import {connect} from 'react-redux';
import {
  selectLivrosLendo,
  isLoadingLendo,
} from '../../redux/lendo/lendo.selectors';
import {buscaLendoAsync} from '../../redux/lendo/lendo.action';
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
  buscaLendo: () => dispatch(buscaLendoAsync()),
});

const mapStateToProps = createStructuredSelector({
  livrosLendo: selectLivrosLendo,
  isLoading: isLoadingLendo,
});

export default connect(mapStateToProps, mapDispatchToProps)(Lendo);
