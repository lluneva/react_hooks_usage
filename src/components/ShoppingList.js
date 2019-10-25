import React, { useContext } from 'react';
import { ShoppingContext } from '../contexts/ShoppingContext';
import ShoppingItem from './ShoppingItem';
import styled from "styled-components"

const ShoppingList = () => {
  const { listToBuy } = useContext(ShoppingContext);
  return (
    <React.Fragment>
      <ListTitle>Things to buy</ListTitle>
      {listToBuy.map(item => (
        <ShoppingItem listItem={item} key={item.id} />
      ))}

    </React.Fragment>
  );
};

export default ShoppingList;

export const ListTitle = styled.h1`
text-align: center;
background: #3d3d3d;
padding: 10px 0;
`
