import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Button} from './styles';

const ShowBook = ({expanded, onClick}) => {
  Icon.loadFont();
  const iconName = expanded ? 'expand-less' : 'expand-more';
  return (
    <Button onPress={onClick}>
      <Icon name={iconName} size={28} />
    </Button>
  );
};

export default ShowBook;
