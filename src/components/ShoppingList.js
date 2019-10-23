import React, { useContext } from 'react'
import { ShoppingContext } from '../contexts/ShoppingContext'

const ShoppingList = () => {
    console.log(useContext(ShoppingContext))
    // const { list } = useContext(ShoppingContext)
    return (
        <div>
            {/* {list.map(item => <li>{item}F</li>)} */}
        </div>
    )
}

export default ShoppingList
