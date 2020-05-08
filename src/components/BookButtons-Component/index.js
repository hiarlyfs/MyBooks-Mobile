import React from 'react';
import {ContainerButtons} from './styles';
import DesireButton from '../DesireListButton-Component';
import ReadingButton from '../ReadingButton-Component';
import ReadButton from '../ReadButton-Component';

const todosBotoes = {
  'LISTA DE DESEJOS': ['readingButton', 'readButton'],
  FINALIZADO: ['readingButton', 'desireButton'],
  LENDO: ['desireButton', 'readButton'],
};

const BookButtons = ({book}) => {
  const botoes = book.status
    ? todosBotoes[book.status]
    : ['readingButton', 'readButton', 'desireButton'];

  return (
    <ContainerButtons>
      {botoes.includes('desireButton') ? <DesireButton book={book} /> : null}
      {botoes.includes('readingButton') ? <ReadingButton book={book} /> : null}
      {botoes.includes('readButton') ? <ReadButton book={book} /> : null}
    </ContainerButtons>
  );
};

export default BookButtons;
