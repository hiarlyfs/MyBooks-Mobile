import React from 'react';
import BooksInformation from '../../components/Books-Information-Component';

const ListaDesejos = () => {
  return <BooksInformation apiUrl="/listaDesejos" titulo="Lista de Desejos" />;
};

export default ListaDesejos;
