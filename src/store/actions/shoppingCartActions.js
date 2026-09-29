import {
  SET_CART,
  SET_PAYMENT,
  SET_ADDRESS,
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
