import React from 'react';
import {SearchBar} from './styles';

const SearchByTitle = ({onChange}) => {
  return <SearchBar onChange={onChange} placeholder="Digite o nome do livro" />;
};

export default SearchByTitle;
