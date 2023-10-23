import React, { createContext, useEffect, useReducer } from 'react'

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

        let existingProduct = state.cart.find((item) => item.id === id)

        if (existingProduct) {
            let updatedProduct = state.cart.map((item) => {
                if (item.id === id) {

                    let newQuantity = item.quantity + quantity

                    if (newQuantity >= item.singleProduct.stock){
                        newQuantity= item.singleProduct.stock
                    }
                    console.log(item.singleProduct.stock);

                    return {
                        ...item,
                        quantity: newQuantity
                    }
                }

                else {
                    return item
                }
            })

            return {
                ...state,
                cart: updatedProduct
            }
        } else {
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




    }
    if (action.type === "REMOVE_CART_ITEM") {

        let updatedCart = state.cart.filter((item) => item.id !== action.payload)

        return {
            ...state,
            cart: updatedCart
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

    const removeCartItem = (id) => {
        dispatch({ type: "REMOVE_CART_ITEM", payload: id })
    }

    return <CartContext.Provider value={{ ...state, addToCart, removeCartItem,cartItemTotal }}>
        {children}
    </CartContext.Provider>

}

