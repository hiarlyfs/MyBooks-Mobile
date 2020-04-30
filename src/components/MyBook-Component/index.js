import React, {useState} from 'react';
import {
  Container,
  InformationContainer,
  Image,
  Key,
  BookInformation,
  Value,
} from './styles';
import {getDate} from '../../utils/FormatDate';
import DeleteButton from '../DeleteButton-Component.js';
import BookButtons from '../BookButtons-Component';
import OpenBook from '../OpenBook';

const MyBook = ({book}) => {
  const [fullSinopse, setFullSinopse] = useState(false);
  const ImageUri = () => {
    if (book.imageUrl) return {uri: book.imageUrl};
    // eslint-disable-next-line global-require
    return require('../../assests/no-foto.jpg');
  };
  return (
    <Container>
      <Image source={ImageUri()} />
      <InformationContainer>
        <BookInformation>
          <Key>Titulo: </Key>
          <Value>
            {book.titulo}
            {book.subTitulo ? `: ${book.subTitulo}` : null}
          </Value>
        </BookInformation>
        <BookInformation>
          <Key>Páginas: </Key>
          <Value>{book.paginas}</Value>
        </BookInformation>
        <BookInformation>
          <Key>Autores: </Key>
          <Value>{book.autores.join('; ')}</Value>
        </BookInformation>
        <BookInformation>
          <Key>Sinopse: </Key>
          <Value
            onPress={() => {
              setFullSinopse(!fullSinopse);
            }}>
            {fullSinopse
              ? book.sinopse
              : `${book.sinopse.substring(0, 100)}...`}
          </Value>
        </BookInformation>
        {book.finalizadoEm ? (
          <BookInformation>
            <Key>Finalizado em: </Key>
            <Value>{getDate(new Date(book.finalizadoEm))}</Value>
          </BookInformation>
        ) : null}
        {book.infoLink ? <OpenBook link={book.infoLink} /> : null}
      </InformationContainer>
      <DeleteButton book={book} />
      <BookButtons book={book} />
    </Container>
  );
};

export default MyBook;
