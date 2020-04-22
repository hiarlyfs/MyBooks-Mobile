import React from 'react';
import {ContainerButtons} from './styles';
import DesireButton from '../DesireListButton-Component';
import ReadingButton from '../ReadingButton-Component';
import ReadButton from '../ReadButton-Component';

const BookButtons = ({isbn}) => {
  return (
    <ContainerButtons>
      <DesireButton isbn={isbn} />
      <ReadingButton isbn={isbn} />
      <ReadButton isbn={isbn} />
    </ContainerButtons>
  );
};

export default BookButtons;
