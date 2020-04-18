import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Button, ContainerSearch, SearchBar} from './styles';

const SearchBook = ({value, onChange, handleClick}) => {
  Icon.loadFont();
  return (
    <ContainerSearch>
      <SearchBar
        value={value}
        onChange={onChange}
        placeholder="Digite o titulo ou ISBN"
      />
      <Button onPress={handleClick}>
        <Icon name="search" size={22} />
      </Button>
    </ContainerSearch>
  );
};

export default SearchBook;
