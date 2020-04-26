import React, {useState} from 'react';
import {Container, Key, BookInformation, Value} from './styles';
import BookButtons from '../BookButtons-Component';

const SearchBook = ({book}) => {
  const [fullSinopse, setFullSinopse] = useState(false);
  return (
    <Container>
      <BookInformation>
        <Key>Titulo: </Key>
        <Value>
          {book.volumeInfo.title}
          {book.volumeInfo.subtitle ? `: ${book.volumeInfo.subtitle}` : null}
        </Value>
      </BookInformation>
      <BookInformation>
        <Key>Páginas: </Key>
        <Value>{book.volumeInfo.pageCount}</Value>
      </BookInformation>
      <BookInformation>
        <Key>Autores: </Key>
        <Value>
          {book.volumeInfo.authors
            ? [...book.volumeInfo.authors].join('; ')
            : ''}
        </Value>
      </BookInformation>
      <BookInformation>
        <Key>Sinopse: </Key>
        <Value
          onPress={() => {
            setFullSinopse(!fullSinopse);
          }}>
          {fullSinopse
            ? book.volumeInfo.description
            : `${String(book.volumeInfo.description).substring(0, 100)}...`}
        </Value>
      </BookInformation>
      <BookButtons book={book} />
    </Container>
  );
};

export default SearchBook;
