import React, {useState} from 'react';
import BooksScrollView from '../Books-ScrollView-Component';
import {Spinner, Title, Container, HeadContainer} from './styles';
import ShowCategory from '../ShowCategory';

const CategoryBook = ({livros, titulo, isLoading}) => {
  const [expanded, setExpanded] = useState(true);

  const toogleCategory = () => {
    setExpanded(!expanded);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (!livros.length) {
    return null;
  }

  return (
    <Container expanded={expanded}>
      <HeadContainer>
        <Title>{titulo}:</Title>
        <ShowCategory onClick={toogleCategory} expanded={expanded} />
      </HeadContainer>
      <BooksScrollView books={livros} />
    </Container>
  );
};

export default CategoryBook;
