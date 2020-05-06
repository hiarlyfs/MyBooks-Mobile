import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectTodasCategorias} from '../../redux/categorias/categorias.selectors';
import SearchByTitle from '../FilterByTitle-Component';

import {filtrarPorCategoria, livrosSemCategoria} from '../../utils/Livros';

import {Title, Container, Scroll} from './styles';
import CategoryBook from '../CategoryBook';

const AllCategoryBooks = ({titlePage, isLoading, categorias, livros}) => {
  const [books, setBooks] = useState([]);
  const handleSearch = (event) => {
    if (!event.nativeEvent.text) {
      setBooks(livros);
    } else {
      setBooks(
        livros.filter((book) => {
          return book.titulo
            .toLowerCase()
            .includes(event.nativeEvent.text.toLowerCase());
        })
      );
    }
  };

  useEffect(() => {
    setBooks(livros);
  }, [livros]);

  return (
    <Container>
      <Title>{titlePage}</Title>
      <SearchByTitle onChange={handleSearch} />
      <Scroll>
        {categorias.map((categoria) => (
          <CategoryBook
            // eslint-disable-next-line no-underscore-dangle
            key={categoria._id}
            isLoading={isLoading}
            titulo={categoria.nome}
            livros={filtrarPorCategoria(categoria.nome, books)}
          />
        ))}
        <CategoryBook
          isLoading={isLoading}
          titulo="Sem Categoria"
          livros={livrosSemCategoria(books)}
        />
      </Scroll>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  categorias: selectTodasCategorias,
});

export default connect(mapStateToProps)(AllCategoryBooks);
