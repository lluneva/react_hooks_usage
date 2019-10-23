import { ShoppingContext } from '../contexts/ShoppingContext';
import React, { useContext, useState } from 'react';

const ShoppingForm = () => {
    const { dispatch } = useContext(ShoppingContext);
    const [listItem, setListItem] = useState("")
    const handleInputChange = (e) => {
        setListItem({ listItem: e.target.value })
    }
    const handleAddItem = (e) => {
        e.preventDefault();
        dispatch({ type: "ADD_ITEM", listItem })
        setListItem({ listItem: "" })
    }
    return (
        <div>
            <input type="text" placeholder="Your item here" name="listItem"
                onChange={handleInputChange} />
            <button type="button" onClick={handleAddItem} name="listItem" >Add item</button>
        </div>

    )
}

export default ShoppingForm
