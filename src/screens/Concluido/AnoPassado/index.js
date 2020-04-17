import React from 'react';
import BooksInformation from '../../../components/Books-Information-Component';

const ConcluidoAnoPassado = () => {
  return (
    <BooksInformation
      apiUrl={`/livrosLidosEm?ano=${new Date().getFullYear() - 1}`}
      titulo={`Livros lidos em ${new Date().getFullYear() - 1}`}
    />
  );
};

export default ConcluidoAnoPassado;
