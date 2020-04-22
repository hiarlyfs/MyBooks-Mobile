import React, {useEffect} from 'react';
import {createStructuredSelector} from 'reselect';

import {connect} from 'react-redux';
import {
  selectLivrosLendo,
  isLoadingLendo,
} from '../../redux/lendo/lendo.selectors';
import {buscaLendoAsync} from '../../redux/lendo/lendo.action';
import BooksInformation from '../../components/Books-Information';

const Lendo = ({buscaLendo, livrosLendo, isLoading}) => {
  useEffect(() => {
    buscaLendo();
  }, []);

  return (
    <BooksInformation
      isLoading={isLoading}
      allBooks={livrosLendo}
      titulo="Lendo"
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
