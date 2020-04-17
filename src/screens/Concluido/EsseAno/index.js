import React from 'react';
import BooksInformation from '../../../components/Books-Information-Component';

const ConcluidoEsseAno = () => {
  return (
    <BooksInformation
      apiUrl={`/livrosLidosEm?ano=${new Date().getFullYear()}`}
      titulo={`Livros lidos em ${new Date().getFullYear()}`}
    />
  );
};

export default ConcluidoEsseAno;
