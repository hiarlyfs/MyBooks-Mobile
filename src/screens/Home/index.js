import React, {useState} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import api from '../../services/api';
import SearchBook from '../../components/SearchBook-Bar-Component';
import {Container, Titulo} from './styles';
import SearchBookScrollView from '../../components/SearchBook-ScrollView-Component';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');

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
      <Spinner
        visible={loading}
        // eslint-disable-next-line react/jsx-boolean-value
        cancelable={true}
        textContent="Carregando..."
      />
      <Titulo>Buscar Livro</Titulo>
      <SearchBook
        value={searchValue}
        onChange={onChange}
        handleClick={handleClick}
      />
      <SearchBookScrollView books={books} />
    </Container>
  );
};

export default Home;
