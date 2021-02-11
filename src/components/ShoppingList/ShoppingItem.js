import React, { useContext } from 'react';
import { ShoppingContext } from '../../contexts/ShoppingContext';
import styled from "styled-components"

const ShoppingItem = ({ listItem }) => {
    const { listItemAmount, listItemName, amountMeasure } = listItem;
    const { dispatch } = useContext(ShoppingContext);
    return (!!listItemName && <StyledListItem>

        <label name="remove">
            <input type="checkbox" name="remove" onClick={() => dispatch({
                type: "REMOVE_ITEM",
                id: listItem.id
            })} />{listItemName}{` `}
            <span>{listItemAmount}</span><span>{amountMeasure}</span></label>
    </StyledListItem>);
};

export default ShoppingItem;

export const StyledListItem = styled.div`
border-bottom: dotted purple 1px;
display: flex;
font-size: 0.8rem;
align-items: center;
line-height: 1;
label:hover, input:hover{
    cursor: pointer;
}
p{
    margin: 0;
    span{
    color: purple;
font-size: 0.8rem;

}
    }
`