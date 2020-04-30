import React from 'react';
import {Linking, Button} from 'react-native';
import {WebLink} from './styles';

const OpenBook = ({link}) => {
  const open = () => {
    Linking.openURL(link);
  };

  return (
    <WebLink>
      <Button color="#000" onPress={open} title="Abrir Livro" />
    </WebLink>
  );
};

export default OpenBook;
