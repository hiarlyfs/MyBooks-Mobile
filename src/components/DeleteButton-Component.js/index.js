import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {Button} from './styles';
import api from '../../services/api';

const DeleteButton = ({id}) => {
  Icon.loadFont();
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(true);
    api.delete(`/books/${id}`);
  };

  return (
    <>
      <Button onPress={handleClick}>
        <Icon name="delete" size={18} />
      </Button>
    </>
  );
};

export default DeleteButton;
