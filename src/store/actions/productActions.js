import api from "../../api/api.js";

import {
  SET_CATEGORIES,
  SET_PRODUCT_LIST,
  SET_TOTAL,
  SET_FETCH_STATE,
  SET_LIMIT,
  SET_OFFSET,
  SET_FILTER,
} from "../reducers/productReducer.js";




// ================= SET CATEGORIES =================

export const setCategories = (categories) => {
    return {
        type: SET_CATEGORIES,
        payload:categories,
    };
};

// ================= SET TOTAL =================

export const setTotal = (total) => {
    return {
        type:SET_TOTAL,
        payload:total,
    };
};

 // ================= SET PRODUCT LIST =================

 export const setProductList = (ProductList) => {
    return {
        type: SET_PRODUCT_LIST,
        payload:ProductList,
    };
 };

  // ================= SET FETCH STATE=================

  export const setFetchState = (fetchState) => {
    return {
        type: SET_FETCH_STATE,
        payload:fetchState,
    };
  };

    // ================= SET LIMIT=================

    export const setLimit = (limit) => {
        return {
            type: SET_LIMIT,
            payload:limit,
        };
    };

    // ================= SET OFFSET=================

    export const setOffset = (offset) => {
        return {
            type:SET_OFFSET,
            payload:offset,
        };
    };

     // ================= SET FILTER=================

     export const setFilter = (filter) => {
        return {
            type:SET_FILTER,
            payload:filter,
        };
     };

export const fetchCategories = () => {
  return async (dispatch, getState) => {
    const categories = getState().product.categories;

    if (categories.length > 0) {
      return;
    }

    try {
      const response = await api.get("/categories");

      console.log("CATEGORIES:", response.data);

      dispatch(setCategories(response.data));
    } catch (error) {
      console.error(
        "CATEGORIES HATASI:",
        error.response?.data || error.message
      );
    }
  };
};