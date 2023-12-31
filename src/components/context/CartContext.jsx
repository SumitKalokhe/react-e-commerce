import React, { createContext, useEffect, useReducer } from 'react'

export const CartContext = createContext();

const initialState = {
    cart: [],
    total_quantity: 0,
    total_price: 0,
    shipping_fee: 500
}

const reducer = (state, action) => {

    if (action.type === 'ADD_TO_CART') {
        let { id, name, price, quantity, singleProduct } = action.payload

        let existingProduct = state.cart.find((item) => item.id === id)

        if (existingProduct) {
            let updatedCart = state.cart.map((item) => {
                if (item.id === id) {

                    let newQuantity = item.quantity + quantity

                    if (newQuantity >= item.singleProduct.stock) {
                        newQuantity = item.singleProduct.stock
                    }

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
                cart: updatedCart
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

    if (action.type === "QUANTITY_INCREMENT") {
        let updatedCart = state.cart.map((item) => {
            if (item.id === action.payload) {

                let newQuantity = item.quantity + 1
                if (newQuantity >= item.singleProduct.stock) {
                    newQuantity = item.singleProduct.stock
                }
                else if (newQuantity < 1) {
                    newQuantity = 1
                }

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
            cart: updatedCart
        }
    }

    if (action.type === "QUANTITY_DECREMENT") {
        let updatedCart = state.cart.map((item) => {
            if (item.id === action.payload) {
                let newQuantity = item.quantity - 1
                if (newQuantity >= item.singleProduct.stock) {
                    newQuantity = item.singleProduct.stock
                }
                else if (newQuantity < 1) {
                    newQuantity = 1
                }

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
            cart: updatedCart
        }
    }

    if (action.type === "ORDER_TOTAL_PRICE") {

        let orderTotal = state.cart.reduce((accumulator, item) => {
            let { price, quantity } = item;

            accumulator = accumulator + (price * quantity);

            return accumulator;

        }, 0);

        return {
            ...state,
            total_price: orderTotal
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

    const cartQuantityIncrement = (id) => {
        dispatch({ type: "QUANTITY_INCREMENT", payload: id })
    }
    const cartQuantityDecrement = (id) => {
        dispatch({ type: "QUANTITY_DECREMENT", payload: id })
    }

    useEffect(() => {
        dispatch({ type: "ORDER_TOTAL_PRICE" })
        console.log(state.total_price);
    }, [state.cart])

    return <CartContext.Provider value={{ ...state, addToCart, removeCartItem, cartQuantityIncrement, cartQuantityDecrement, cartItemTotal }}>
        {children}
    </CartContext.Provider>

}

