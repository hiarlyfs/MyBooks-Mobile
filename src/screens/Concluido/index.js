import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import BooksScrollView from '../../components/Books-ScrollView-Component';
import SearchByTitle from '../../components/SearchByTitle-Component';
import {Container, Titulo} from './styles';

const Concluido = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [books, setBooks] = useState([]);

  const loadData = async () => {
    const response = await api.get('/livrosLidos');
    setAllBooks(response.data);
    setBooks(response.data);
  };

  const handleSearch = (event) => {
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
      <Titulo>Livros Lidos</Titulo>
      <SearchByTitle onChange={handleSearch} />
      <BooksScrollView books={books} />
    </Container>
  );
};

export default Concluido;
