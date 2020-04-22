import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {SearchBar, SearchContainer, Button} from './styles';

const SearchByTitle = ({onChange}) => {
  Icon.loadFont();
  return (
    <SearchContainer>
      <Button>
        <Icon name="filter" size={18} />
      </Button>
      <SearchBar
        placeholder="Digite o nome do livro pra filtrar"
        onChange={onChange}
      />
    </SearchContainer>
  );
};

export default SearchByTitle;
