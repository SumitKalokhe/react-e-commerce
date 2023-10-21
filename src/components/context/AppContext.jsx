import { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

const API = 'https://api.pujakaitem.com/api/products'

const initialState = {
    products: [],
    singleProduct: {}
};

export const AppContextProvider = ({ children }) => {

    const [filter, setFilter]= useState('all')

    // console.log(filter);
    const reducer = (state, action) => {

        switch (action.type) {
            case "SET_API_DATA":
                return {
                    ...state,
                    products: action.payload
                }
            case "SET_SINGLE_PRODUCT":
                return {
                    ...state,
                    singleProduct: action.payload
                }

            default:
                return state;
        }

    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const getProducts = async (url) => {

        try {
            const res = await axios.get(url);
            const products = res.data;
            dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }

    const getSingleProduct = async (url) => {

        try {
            const res = await axios.get(url);
            const singleProduct = res.data;
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct});
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }

    useEffect(() => {
        getProducts(API)
    }, [])

    return <AppContext.Provider value={{ ...state, getSingleProduct, filter, setFilter }}>
        {children}
    </AppContext.Provider>


}


