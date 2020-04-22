import React, {useState} from 'react';
import {Container, Key, BookInformation, Value} from './styles';
import {getDate} from '../../utils/FormatDate';
import DeleteButton from '../DeleteButton-Component.js';
import BookButtons from '../BookButtons-Component';

const MyBook = ({book}) => {
  const [fullSinopse, setFullSinopse] = useState(false);

  return (
    <Container>
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
        <Value>
          {book.autores
            .map((autor) => `${autor.nome} ${autor.sobrenome}`)
            .join(', ')}
        </Value>
      </BookInformation>
      <BookInformation>
        <Key>Sinopse: </Key>
        <Value
          onPress={() => {
            setFullSinopse(!fullSinopse);
          }}>
          {fullSinopse ? book.sinopse : `${book.sinopse.substring(0, 100)}...`}
        </Value>
      </BookInformation>
      <BookInformation>
        <Key>Edição: </Key>
        <Value>{book.edicao}</Value>
      </BookInformation>
      {book.finalizadoEm ? (
        <BookInformation>
          <Key>Finalizado em: </Key>
          <Value>{getDate(new Date(book.finalizadoEm))}</Value>
        </BookInformation>
      ) : null}
      <DeleteButton id={book._id} />
      <BookButtons isbn={book.isbn} />
    </Container>
  );
};

export default MyBook;
