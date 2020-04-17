import React, {useEffect, useState} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import api from '../../services/api';
import BooksScrollView from '../Books-ScrollView-Component';
import SearchByTitle from '../SearchByTitle-Component';
import {Container, Titulo} from './styles';

const BooksInformation = ({apiUrl, titulo}) => {
  const [allBooks, setAllBooks] = useState([]);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    const response = await api.get(apiUrl);
    setAllBooks(response.data);
    setBooks(response.data);
    setLoading(false);
  };

  const handleSearch = (event) => {
    if (!event.nativeEvent.text) {
      setBooks(allBooks);
    }
    setBooks(
      allBooks.filter((book) => {
        return book.titulo
          .toLowerCase()
          .includes(event.nativeEvent.text.toLowerCase());
      })
    );
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <Spinner visible={loading} cancelable textContent="Carregando..." />
      <Titulo>{titulo}</Titulo>
      <SearchByTitle onChange={handleSearch} />
      <BooksScrollView books={books} />
    </Container>
  );
};

export default BooksInformation;
