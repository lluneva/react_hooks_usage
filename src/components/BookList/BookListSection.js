import React from 'react';
import BookContextProvider from '../../contexts/BookContext';
import Navbar from './Navbar';
import BookList from './BookList';
import BookForm from './BookForm';
import { SectionWrapper } from '../../commonStyles/SectionWrapper';

const BookListSection = () => (
  <SectionWrapper>
    <BookContextProvider>
      <Navbar />
      <BookList />
      <BookForm />
    </BookContextProvider>
  </SectionWrapper>
);

export default BookListSection;
