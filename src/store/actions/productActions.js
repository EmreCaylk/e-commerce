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

// ================= FETCH PRODUCTS THUNK =================

export const fetchProducts = (
  category,
  filter,
  sort,
  limit = 25,
  offset = 0
) => {
  return async (dispatch) => {
    try {
      // İstek başladı
      dispatch(setFetchState("FETCHING"));

      // Query parametreleri
      const params = {
        limit,
        offset,
      };

      // T14 parametreleri varsa koruyoruz
      if (category) {
        params.category = category;
      }

      if (filter) {
        params.filter = filter;
      }

      if (sort) {
        params.sort = sort;
      }

      // API isteği
      const response = await api.get("/products", {
        params,
      });

      console.log("PRODUCTS:", response.data);
      console.log("PRODUCT PARAMS:", params);

      // Ürünleri Redux'a kaydet
      dispatch(setProductList(response.data.products));

      // Toplam ürün sayısını Redux'a kaydet
      dispatch(setTotal(response.data.total));

      // Redux pagination değerlerini kaydet
      dispatch(setLimit(limit));
      dispatch(setOffset(offset));

      // İstek başarılı
      dispatch(setFetchState("FETCHED"));
    } catch (error) {
      console.error(
        "PRODUCTS HATASI:",
        error.response?.data || error.message
      );

      dispatch(setFetchState("FAILED"));
    }
  };
};