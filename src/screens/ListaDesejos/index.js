import React, {useEffect} from 'react';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import AllCategoryBooks from '../../components/AllCategoryBooks';
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
    <AllCategoryBooks
      titlePage="Lista de Desejo"
      livros={listaDesejo}
      isLoading={isLoading}
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
