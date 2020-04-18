import React from 'react';
import SearchBook from '../SearchBook-Component';
import {ScrollBooks} from './styles';

const SearchBookScrollView = ({books}) => {
  return (
    <ScrollBooks>
      {books.map((book) => (
        // eslint-disable-next-line no-underscore-dangle
        <SearchBook key={book.isbn} book={book} />
      ))}
    </ScrollBooks>
  );
};

export default SearchBookScrollView;
