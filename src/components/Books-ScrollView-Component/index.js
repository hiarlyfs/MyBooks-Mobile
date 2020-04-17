import React from 'react';
import MyBook from '../MyBook-Component/index';
import {ScrollBooks} from './styles';

const BooksScrollView = ({books}) => {
  return (
    <ScrollBooks>
      {books.map((book) => (
        // eslint-disable-next-line no-underscore-dangle
        <MyBook key={book._id} book={book} />
      ))}
    </ScrollBooks>
  );
};

export default BooksScrollView;
