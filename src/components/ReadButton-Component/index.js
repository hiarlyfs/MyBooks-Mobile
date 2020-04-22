import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import api from '../../services/api';

const ReadButton = ({isbn}) => {
  const handleClick = async () => {
    await api.post('/books', {
      isbn,
      status: 'LISTA DE DESEJOS',
    });
  };

  return (
    <TouchableOpacity onPress={handleClick}>
      <Icon name="check" size={24} />
    </TouchableOpacity>
  );
};

export default ReadButton;
