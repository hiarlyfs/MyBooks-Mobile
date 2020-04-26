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
    const response = await api.get(`/searchBook?titulo=${value}`);
    if (response.status === 200) {
      setBooks(response.data);
    } else {
      setBooks([]);
    }
    setLoading(false);
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
      <Spinner visible={loading} cancelable textContent="Carregando..." />
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
