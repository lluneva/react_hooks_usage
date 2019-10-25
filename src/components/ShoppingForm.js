import React, { useContext, useState } from 'react';
import { ShoppingContext } from '../contexts/ShoppingContext';
import { InputText, InputButton } from '../styledComponents/Input';
import styled from "styled-components"
import ButtonsWrapper from '../styledComponents/ButtonsWrapper';

const ShoppingForm = () => {
  const { dispatch } = useContext(ShoppingContext);
  const [listItem, setListItem] = useState({ listItemName: '', listItemAmount: '', amountMeasure: '' });

  const handleInputChange = e => {
    setListItem({ ...listItem, [e.target.name]: e.target.value });
  };
  const handleAddItem = e => {
    e.preventDefault();
    const { listItemName, listItemAmount, amountMeasure } = listItem;
    dispatch({
      type: 'ADD_ITEM',
      listItem:
        { listItemName, listItemAmount, amountMeasure }
    });
    setListItem({ listItemName: '', listItemAmount: '', amountMeasure: '' });
  };
  return (
    <FormWrapper onSubmit={handleAddItem}>
      <div>
        <InputText
          type="text"
          placeholder="Item name"
          name="listItemName"
          onChange={handleInputChange}
          value={listItem.listItemName}
          required
        />
        <InputNumber
          type="number"
          placeholder="amount"
          name="listItemAmount"
          onChange={handleInputChange}
          value={listItem.listItemAmount}
        />
        <StyledSelect name="amountMeasure" onChange={handleInputChange}>
          <option >select measure</option>
          <option  >pcs</option>
          <option >kg</option>
          <option >litres</option>
        </StyledSelect>
      </div>


      <ButtonsWrapper>
        <InputButton active type="submit" value="add item" />
      </ButtonsWrapper>
    </FormWrapper>
  );
};

export default ShoppingForm;

export const FormWrapper = styled.form`
div{
  display: flex;
  align-items: center;
  height: 35px;
input {
  margin:5px;
}
}
`;
export const InputNumber = styled.input.attrs(props => ({
  type: 'number',
}))`
  width: 80px;
  box-sizing: border-box;
  margin: 6px 0;
  padding-left: 10px;
  background: #3c1f3c;
  color: white;
  border: 0;
  line-height: 2;
`;

export const StyledSelect = styled.select`
width: 100px;
height: 30px;
line-height: 1;
font-size: 0.7rem;
white-space: pre-line;
background-color: #3c1f3c;
color: #fff;
option{
  height: 0.8rem;
  background-color: #3c1f3c;
color: #fff;

}
`