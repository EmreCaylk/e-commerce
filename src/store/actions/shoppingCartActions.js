import {
  SET_CART,
  SET_PAYMENT,
  SET_ADDRESS,
} from "../reducers/shoppingCartReducer.js";

import {
    ADD_TO_CART,
    INCREASE_CART_ITEM,
    DECREASE_CART_ITEM,
    REMOVE_FROM_CART,
    TOGGLE_CART_ITEM,
} from "../reducers/shoppingCartReducer.js";




export const setCart = (cart) => {
    return {
        type:SET_CART,
        payload:cart,
    };
};

export const setPayment = (payment) => {
    return {
        type:SET_PAYMENT,
        payload:payment,
    };
};

export const setAdress = (adress) => {
    return {
        type:SET_ADDRESS,
        payload:adress,
    };
};


export const addToCart = (product) => {
    return(dispatch) => {
        dispatch({
            type: ADD_TO_CART,
            payload: product,
        });
    };
};

// ================= INCREASE =================

export const increaseCartItem = (productId) => {
    return(dispatch) => {
        dispatch({
            type:INCREASE_CART_ITEM,
            payload:productId,
        });
    };
};
// ================= DECREASE =================
export const decreaseCartItem = (productId) => {
    return(dispatch) => {
        dispatch({
            type: DECREASE_CART_ITEM,
            payload:productId,
        });
    };
};

// ================= REMOVE =================
export const removeFromCart = (productId)=> {
    return(dispatch)=> {
        dispatch({
            type:REMOVE_FROM_CART,
            payload:productId,
        });
    };
};

// ================= TOGGLE =================

export const toggleCartItem = (productId) => {
    return(dispatch) => {
        dispatch({
            type:TOGGLE_CART_ITEM,
            payload:productId,
        })
    }
}