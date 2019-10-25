import React, { createContext, useReducer, useEffect } from 'react';
import { clickReducer } from '../reducers/clickReducer';

export const ClickContext = createContext();

const ClickContextProvider = props => {
  const initialState = 0;
  const [counter, dispatch] = useReducer(clickReducer, initialState, () => {
    const localData = localStorage.getItem('counter');
    return localData || initialState;
  });

  useEffect(() => {
    localStorage.setItem('counter', counter);
  });

  return (
    <ClickContext.Provider value={{ counter, dispatch }}>{props.children}</ClickContext.Provider>
  );
};

export default ClickContextProvider;
