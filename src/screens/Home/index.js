import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import api from '../../services/api';
import {buscaCategoriasAsync} from '../../redux/categorias/categorias.actions';
import SearchBook from '../../components/SearchBook-Bar-Component';
import {Container, Titulo, Spinner} from './styles';
import SearchBookScrollView from '../../components/SearchBook-ScrollView-Component';

const Home = ({buscaCategorias}) => {
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

  const handleClick = () => {
    if (!searchValue) {
      return;
    }

    // eslint-disable-next-line no-restricted-globals
    loadData(searchValue);
  };

  return (
    <Container>
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

const mapDispatchToProps = (dispatch) => ({
  buscaCategorias: () => dispatch(buscaCategoriasAsync()),
});

export default connect(null, mapDispatchToProps)(Home);
