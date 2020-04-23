import React from 'react';
import {ContainerButtons} from './styles';
import DesireButton from '../DesireListButton-Component';
import ReadingButton from '../ReadingButton-Component';
import ReadButton from '../ReadButton-Component';

const BookButtons = ({book}) => {
  return (
    <ContainerButtons>
      <DesireButton book={book} />
      <ReadingButton book={book} />
      <ReadButton book={book} />
    </ContainerButtons>
  );
};

export default BookButtons;
