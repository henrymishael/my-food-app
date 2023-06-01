//cart.jsx 
import foodList from "../fooditems";
import react, { useEffect } from "react";
import { useState } from "react";


useEffect(()=>{
    typeof window !== "undefined"?
    JSON.parse(
        localStorage.getItem('cartItems') || 
        `[{}]`
    )
    :null
})
    
export const getCartItems = () => {
    
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    return cartItems ? cartItems : filteredData;
};

export const addToCart = (item) => {
    const cartItems = getCartItems();
    cartItems.push(item);
    saveCartItems(cartItems);
};

export const saveCartItems = (cartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

export const removeFromCart = (cartItem) => {
    const cartLocalStorage = getCartItems()
    const filteredCart = cartLocalStorage.filter((cartItem) => cartItem.id !== cartItem.id);
    saveCartItems(filteredCart)
    
};

export const clearstorage = () => {
    localStorage.clear()
}












