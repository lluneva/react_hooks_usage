import React from 'react';
import { SectionWrapper } from '../styledComponents/SectionWrapper';
import ShoppingForm from './ShoppingForm';
import ShoppingList from './ShoppingList';
import ShoppingContextProvider from '../contexts/ShoppingContext';
import HeaderText from '../styledComponents/HeaderText';

const ShoppingSection = () => (
  <SectionWrapper>
    <HeaderText>Shopping List App</HeaderText>
    <ShoppingContextProvider>
      <ShoppingForm />
      <ShoppingList />
    </ShoppingContextProvider>
  </SectionWrapper>
);

export default ShoppingSection;
