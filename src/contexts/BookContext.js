import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = props => {

  //const [state, dispatch] = useReducer(reducer, initialArg, init);  reducer returms two elements aas array -state and dispatch function
  //init :  It’s an optional value that will lazily create the initial state. That means we can calculate the initial state/value with an init function outside of the reducer instead of providing an explicit value. 
  //That’s handy if the initial value could be different, say based on a last saved state instead of a consistent value.
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);
  // const addBook = (title, author) => {
  //   setBooks([...books, { title, author, id: uuid() }]);
  // };

  // const removeBook = id => {
  //   setBooks(books.filter(book => book.id !== id));
  // };
  return <BookContext.Provider value={{ books, dispatch }}>{props.children}</BookContext.Provider>;
};

export default BookContextProvider;
