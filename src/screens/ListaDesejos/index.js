import React, {useEffect} from 'react';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import BooksInformation from '../../components/Books-Information';
import {
  selectLivrosListaDesejo,
  isLoadingListaDesejo,
} from '../../redux/listaDesejo/listaDesejo.selectors';
import {buscaListaDesejoAsync} from '../../redux/listaDesejo/listaDesejo.actions';

const Lendo = ({isLoading, listaDesejo, buscaListaDesejo}) => {
  useEffect(() => {
    buscaListaDesejo();
  }, []);

  return (
    <BooksInformation
      isLoading={isLoading}
      allBooks={listaDesejo}
      titulo="Lista de Desejos"
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  buscaListaDesejo: () => dispatch(buscaListaDesejoAsync()),
});

const mapStateToProps = createStructuredSelector({
  listaDesejo: selectLivrosListaDesejo,
  isLoading: isLoadingListaDesejo,
});

export default connect(mapStateToProps, mapDispatchToProps)(Lendo);
