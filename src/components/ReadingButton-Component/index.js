import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import api from '../../services/api';

const ReadingButton = ({isbn}) => {
  const handleClick = async () => {
    await api.post('/books', {
      isbn,
      status: 'LENDO',
    });
  };

  return (
    <TouchableOpacity onPress={handleClick}>
      <Icon name="play" size={24} />
    </TouchableOpacity>
  );
};

export default ReadingButton;
