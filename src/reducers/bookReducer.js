import uuid from 'uuid/v1';

export const bookReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, { title: action.book.title, author: action.book.author, id: uuid() }];
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.id);
    case 'REMOVE_ALL_BOOKS':
      // eslint-disable-next-line no-param-reassign
      return (state = []);
    default:
      return state;
  }
};
