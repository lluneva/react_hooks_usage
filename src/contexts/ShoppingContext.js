import React, { createContext, useReducer, useEffect } from 'react';
import { shoppingListReducer } from '../reducers/shoppingListReducer';

export const ShoppingContext = createContext();

const ShoppingContextProvider = props => {
  const [listToBuy, dispatch] = useReducer(shoppingListReducer, [], () => {
    const listToBuy = localStorage.getItem('listToBuy');
    return listToBuy ? JSON.parse(listToBuy) : [];
  });




  useEffect(() => {
    localStorage.setItem('listToBuy', JSON.stringify(listToBuy));
  }, [listToBuy]);


  return (
    <ShoppingContext.Provider value={{ listToBuy, dispatch }}>{props.children}</ShoppingContext.Provider>
  );
};

export default ShoppingContextProvider;
