import React, { createContext, useReducer } from 'react'

export const CartContext = createContext();


const initialState = {
    cart: [],
    total_quantity: '',
    total_price: '',
    shipping_fee: 500
}

const reducer = (state, action) => {

    if (action.type === 'ADD_TO_CART') {
        let { id, name, price, quantity, singleProduct } = action.payload

        let cartProduct = {
            id,
            name,
            price,
            quantity,
            singleProduct
        }

        return {
            ...state,
            cart: [...state.cart, cartProduct]
        }


    }
    return state
}

export const CartContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const cartItemTotal = state.cart.length;

    const addToCart = (id, name, price, quantity, singleProduct) => {

        dispatch({ type: "ADD_TO_CART", payload: { id, name, price, quantity, singleProduct } })

    }

    return <CartContext.Provider value={{ ...state, addToCart , cartItemTotal}}>
        {children}
    </CartContext.Provider>

}

