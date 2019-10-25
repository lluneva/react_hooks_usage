import React, { createContext, useReducer, useEffect } from 'react';
import { shoppingListReducer } from '../reducers/shoppingListReducer';

export const ShoppingContext = createContext();

const ShoppingContextProvider = props => {
  const [data, dispatch] = useReducer(shoppingListReducer, [], () => {
    const dataFromLocal = localStorage.getItem('data');
    return dataFromLocal ? JSON.parse(dataFromLocal) : [];
  });

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);


  return (
    <ShoppingContext.Provider value={{ data, dispatch }}>
      {props.children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingContextProvider;
