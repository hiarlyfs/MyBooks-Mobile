import React from 'react';
import BooksInformation from '../../../components/Books-Information-Component';

const TodosConcluidos = () => {
  return <BooksInformation apiUrl="/livrosLidos" titulo="Livros Lidos" />;
};

export default TodosConcluidos;
