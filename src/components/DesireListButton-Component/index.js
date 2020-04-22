import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import api from '../../services/api';

const DesireButton = ({isbn}) => {
  const handleClick = async () => {
    await api.post('/books', {
      isbn,
      status: 'LISTA DE DESEJOS',
    });
  };

  return (
    <TouchableOpacity onPress={handleClick}>
      <Icon name="heart" size={24} />
    </TouchableOpacity>
  );
};

export default DesireButton;
