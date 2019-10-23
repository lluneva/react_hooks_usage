import React from 'react'
import { SectionWrapper } from '../App'
import ShoppingForm from './ShoppingForm'
import ShoppingList from './ShoppingList'
import ShoppingContextProvider from '../contexts/ShoppingContext'

const ShoppingSection = () => {
    return (
        <SectionWrapper>
            <ShoppingContextProvider>
                <ShoppingForm />
                <ShoppingList />
            </ShoppingContextProvider>
        </SectionWrapper>
    )
}

export default ShoppingSection
