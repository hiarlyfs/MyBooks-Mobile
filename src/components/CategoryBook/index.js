import React, {useState} from 'react';
import BooksScrollView from '../Books-ScrollView-Component';
import {Spinner, Title, Container, HeadContainer} from './styles';
import ShowCategory from '../ShowCategory';

const CategoryBook = ({livros, titulo, isLoading}) => {
  const [expanded, setExpanded] = useState(true);

  const toogleCategory = () => {
    setExpanded(!expanded);
  };

  if (livros.length) {
    return (
      <Container expanded={expanded}>
        <HeadContainer>
          <Title>{titulo}:</Title>
          <ShowCategory onClick={toogleCategory} expanded={expanded} />
        </HeadContainer>
        {isLoading ? <Spinner /> : <BooksScrollView books={livros} />}
      </Container>
    );
  }

  return null;
};

export default CategoryBook;
