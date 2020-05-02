import React, {useState} from 'react';
import {Dimensions} from 'react-native';
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
  const {width} = Dimensions.get('window');
  return (
    <Container width={width}>
      <Image source={ImageUri()} />
      <InformationContainer>
        <BookInformation>
          <Key>Titulo: </Key>
          <Value width={width}>
            {book.titulo}
            {book.subTitulo ? `: ${book.subTitulo}` : null}
          </Value>
        </BookInformation>
        <BookInformation>
          <Key>Páginas: </Key>
          <Value width={width}>{book.paginas}</Value>
        </BookInformation>
        <BookInformation>
          <Key>Autores: </Key>
          <Value width={width}>{book.autores.join('; ')}</Value>
        </BookInformation>
        <BookInformation>
          <Key>Sinopse: </Key>
          <Value
            width={width}
            onPress={() => {
              setFullSinopse(!fullSinopse);
            }}>
            {!fullSinopse && book.sinopse
              ? `${book.sinopse.substring(0, 100)}...`
              : book.sinopse}
          </Value>
        </BookInformation>
        {book.finalizadoEm ? (
          <BookInformation>
            <Key>Finalizado em: </Key>
            <Value width={width}>{getDate(new Date(book.finalizadoEm))}</Value>
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
