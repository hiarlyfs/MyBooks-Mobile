import React, {useState, useEffect} from 'react';
import {ToastAndroid} from 'react-native';

import NetInfo from '@react-native-community/netinfo';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import api from '../../services/api';
import {buscaCategoriasStart} from '../../redux/categorias/categorias.actions';
import {selectCategoriaIsLoading} from '../../redux/categorias/categorias.selectors';
import SearchBook from '../../components/SearchBook-Bar-Component';
import {Container, Titulo, Spinner, SpinnerInicial} from './styles';
import SearchBookScrollView from '../../components/SearchBook-ScrollView-Component';

const Home = ({buscaCategorias, buscandoCategorias}) => {
  const showAlert = () => {
    ToastAndroid.showWithGravity(
      'Sem conexão à rede!',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    buscaCategorias();
  }, []);

  const loadData = async (value) => {
    setLoading(true);
    api
      .get(`/searchBook?titulo=${value}`)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onChange = (event) => {
    setSearchValue(event.nativeEvent.text);
  };

  const handleClick = async () => {
    const connection = await NetInfo.fetch();
    if (!connection.isConnected) {
      showAlert();
      return;
    }

    if (!searchValue) {
      return;
    }

    // eslint-disable-next-line no-restricted-globals
    loadData(searchValue);
  };

  return (
    <Container>
      <SpinnerInicial
        visible={buscandoCategorias}
        textContent="Carregando..."
      />
      <Titulo>Buscar Livro</Titulo>
      <SearchBook
        value={searchValue}
        onChange={onChange}
        handleClick={handleClick}
      />
      {loading ? (
        <Spinner size="large" />
      ) : (
        <SearchBookScrollView books={books} />
      )}
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  buscandoCategorias: selectCategoriaIsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  buscaCategorias: () => dispatch(buscaCategoriasStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
