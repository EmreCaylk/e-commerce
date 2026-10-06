// ================= ACTION TYPES =================

export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";

export const ADD_TO_CART = "ADD_TO_CART";
export const INCREASE_CART_ITEM = "INCREASE_CART_ITEM";
export const DECREASE_CART_ITEM = "DECREASE_CART_ITEM";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const TOGGLE_CART_ITEM = "TOGGLE_CART_ITEM";


// ================= INITIAL STATE =================

const initialState = {
    cart: [],
    payment: {},
    address: {},
};


// ================= REDUCER =================

export default function shoppingCartReducer(
    state = initialState,
    action
) {
    switch (action.type) {

        // ================= SET CART =================

        case SET_CART:
            return {
                ...state,
                cart: action.payload,
            };


        // ================= ADD TO CART =================

        case ADD_TO_CART: {
            const product = action.payload;

            const existingProduct = state.cart.find(
                (item) => item.product.id === product.id
            );

            if (existingProduct) {
                return {
                    ...state,

                    cart: state.cart.map((item) =>
                        item.product.id === product.id
                            ? {
                                ...item,
                                count: item.count + 1,
                            }
                            : item
                    ),
                };
            }

            return {
                ...state,

                cart: [
                    ...state.cart,
                    {
                        count: 1,
                        checked: true,
                        product: product,
                    },
                ],
            };
        }


        // ================= INCREASE =================

        case INCREASE_CART_ITEM:

            return {
                ...state,

                cart: state.cart.map((item) =>
                    item.product.id === action.payload
                        ? {
                            ...item,
                            count: item.count + 1,
                        }
                        : item
                ),
            };


        // ================= DECREASE =================

        case DECREASE_CART_ITEM:

            return {
                ...state,

                cart: state.cart.map((item) =>
                    item.product.id === action.payload
                        ? {
                            ...item,
                            count:
                                item.count > 1
                                    ? item.count - 1
                                    : 1,
                        }
                        : item
                ),
            };


        // ================= REMOVE =================

        case REMOVE_FROM_CART:

            return {
                ...state,

                cart: state.cart.filter(
                    (item) =>
                        item.product.id !== action.payload
                ),
            };


        // ================= TOGGLE CHECKED =================

        case TOGGLE_CART_ITEM:

            return {
                ...state,

                cart: state.cart.map((item) =>
                    item.product.id === action.payload
                        ? {
                            ...item,
                            checked: !item.checked,
                        }
                        : item
                ),
            };


        // ================= PAYMENT =================

        case SET_PAYMENT:
            return {
                ...state,
                payment: action.payload,
            };


        // ================= ADDRESS =================

        case SET_ADDRESS:
            return {
                ...state,
                address: action.payload,
            };


        // ================= DEFAULT =================

        default:
            return state;
    }
}