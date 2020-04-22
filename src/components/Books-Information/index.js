import React, {useState, useEffect} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import BooksScrollView from '../Books-ScrollView-Component';
import SearchByTitle from '../FilterByTitle-Component';
import {Container, Titulo} from './styles';

const BooksInformation = ({titulo, isLoading, allBooks}) => {
  const [books, setBooks] = useState([]);
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
    setBooks(allBooks);
  }, [allBooks]);

  return (
    <Container>
      <Spinner visible={isLoading} cancelable textContent="Carregando..." />
      <Titulo>{titulo}</Titulo>
      <SearchByTitle onChange={handleSearch} />
      <BooksScrollView books={books} />
    </Container>
  );
};

export default BooksInformation;
