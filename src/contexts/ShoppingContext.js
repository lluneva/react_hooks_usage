import React, { createContext, useReducer, useEffect } from 'react';
import { shoppingListReducer } from '../reducers/shoppingListReducer';

export const ShoppingContext = createContext();

const ShoppingContextProvider = props => {
  const [listToBuy, dispatch] = useReducer(shoppingListReducer, {}, () => {
    const listToBuy = localStorage.getItem('listToBuy');
    // const listBought = localStorage.getItem('listBought');
    return listToBuy ? JSON.parse(listToBuy) : [];
  });




  useEffect(() => {
    localStorage.setItem('listToBuy', JSON.stringify(listToBuy));
  }, [listToBuy]);

  // useEffect(() => {
  //   localStorage.setItem('listBought', JSON.stringify(listBought));
  // }, [listBought]);



  return (
    <ShoppingContext.Provider value={{ /*listBought, */listToBuy, dispatch }}>{props.children}</ShoppingContext.Provider>
  );
};

export default ShoppingContextProvider;
