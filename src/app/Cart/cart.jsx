//cart.jsx 
import foodList from "../fooditems";
import react from "react";


const items = foodList.foodItems

export const addToCart = (item) => {
    const cartItems = getCartItems();
    cartItems.push(item);
    saveCartItems(cartItems);
};

export const getCartItems = () => {
    const filteredData = []
    const cartItems = localStorage.getItem('cartItems')
    return cartItems ? JSON.parse(cartItems) : filteredData;
};

export const saveCartItems = (cartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

export const removeFromCart = (cartItem) => {
    const cartLocalStorage = getCartItems()
    const filteredCart = cartLocalStorage.filter((cartItem) => cartItem.id !== cartItem.id);
    saveCartItems(filteredCart)
    
};









