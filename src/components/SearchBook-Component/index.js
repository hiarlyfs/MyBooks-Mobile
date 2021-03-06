import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import {
  Container,
  InformationContainer,
  Key,
  BookInformation,
  Value,
  Image,
} from './styles';
import BookButtons from '../BookButtons-Component';
import OpenBook from '../OpenBook';

const SearchBook = ({book}) => {
  const ImageUri = () => {
    if (book.volumeInfo.imageLinks)
      return {
        uri: book.volumeInfo.imageLinks.smallThumbnail.replace(
          'http://',
          'https://'
        ),
      };
    // eslint-disable-next-line global-require
    return require('../../assests/no-foto.jpg');
  };
  const [fullSinopse, setFullSinopse] = useState(false);
  const {width} = Dimensions.get('window');
  return (
    <Container>
      <Image source={ImageUri()} />
      <InformationContainer>
        <BookInformation>
          <Key>Titulo: </Key>
          <Value width={width}>
            {book.volumeInfo.title}
            {book.volumeInfo.subtitle ? `: ${book.volumeInfo.subtitle}` : null}
          </Value>
        </BookInformation>
        <BookInformation>
          <Key>Páginas: </Key>
          <Value width={width}>{book.volumeInfo.pageCount}</Value>
        </BookInformation>
        <BookInformation>
          <Key>Autores: </Key>
          <Value width={width}>
            {book.volumeInfo.authors
              ? [...book.volumeInfo.authors].join('; ')
              : ''}
          </Value>
        </BookInformation>
        <BookInformation>
          <Key>Sinopse: </Key>
          <Value
            width={width}
            onPress={() => {
              setFullSinopse(!fullSinopse);
            }}>
            {fullSinopse
              ? book.volumeInfo.description
              : `${String(book.volumeInfo.description).substring(0, 100)}...`}
          </Value>
        </BookInformation>
        {book.volumeInfo.infoLink ? (
          <OpenBook link={book.volumeInfo.infoLink} />
        ) : null}
      </InformationContainer>
      <BookButtons book={book} />
    </Container>
  );
};

export default SearchBook;
