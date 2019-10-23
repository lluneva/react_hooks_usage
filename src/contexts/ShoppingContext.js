import React, { createContext, useReducer, useEffect } from "react"
import { shoppingReducer } from "../reducers/shoppingReducer";

export const ShoppingContext = createContext();

const ShoppingContextProvider = props => {
    const [list, dispatch] = useReducer(shoppingReducer, [], () => {
        const localData = localStorage.getItem("list")
        return localData ? JSON.parse(localData) : []
    })

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(list), [list])
    })

    return (
        <ShoppingContext.Provider value={{ list, dispatch }}>
            {props.children}
        </ShoppingContext.Provider>
    )
}

export default ShoppingContextProvider

