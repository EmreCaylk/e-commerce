import api from "../../api/api.js";

import {
  SET_CATEGORIES,
  SET_PRODUCT_LIST,
  SET_TOTAL,
  SET_FETCH_STATE,
  SET_LIMIT,
  SET_OFFSET,
  SET_FILTER,
  SET_PRODUCT,
} from "../reducers/productReducer.js";


// ================= SET CATEGORIES =================

export const setCategories = (categories) => {
  return {
    type: SET_CATEGORIES,
    payload: categories,
  };
};


// ================= SET TOTAL =================

export const setTotal = (total) => {
  return {
    type: SET_TOTAL,
    payload: total,
  };
};


// ================= SET PRODUCT LIST =================

export const setProductList = (productList) => {
  return {
    type: SET_PRODUCT_LIST,
    payload: productList,
  };
};


// ================= SET FETCH STATE =================

export const setFetchState = (fetchState) => {
  return {
    type: SET_FETCH_STATE,
    payload: fetchState,
  };
};


// ================= SET LIMIT =================

export const setLimit = (limit) => {
  return {
    type: SET_LIMIT,
    payload: limit,
  };
};


// ================= SET OFFSET =================

export const setOffset = (offset) => {
  return {
    type: SET_OFFSET,
    payload: offset,
  };
};


// ================= SET FILTER =================

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter,
  };
};


// ================= SET PRODUCT =================

export const setProduct = (product) => {
  return {
    type: SET_PRODUCT,
    payload: product,
  };
};


// ================= FETCH CATEGORIES =================

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


// ================= FETCH PRODUCTS =================

export const fetchProducts = (
  categoryId,
  filter,
  sort,
  limit,
  offset
) => {
  return async (dispatch) => {
    try {
      dispatch(setFetchState("FETCHING"));

      const params = {};

      if (categoryId) {
        params.category = categoryId;
      }

      if (filter) {
        params.filter = filter;
      }

      if (sort) {
        params.sort = sort;
      }

      if (limit !== undefined) {
        params.limit = limit;
      }

      if (offset !== undefined) {
        params.offset = offset;
      }

      const response = await api.get("/products", {
        params,
      });

      console.log("PRODUCTS:", response.data);

      dispatch(
        setProductList(response.data.products)
      );

      dispatch(
        setTotal(response.data.total)
      );

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


// ================= FETCH PRODUCT DETAIL =================

export const fetchProduct = (productId) => {
  return async (dispatch) => {
    try {
      dispatch(setFetchState("FETCHING"));

      const response = await api.get(
        `/products/${productId}`
      );

      console.log(
        "PRODUCT DETAIL:",
        response.data
      );

      dispatch(
        setProduct(response.data)
      );

      dispatch(
        setFetchState("FETCHED")
      );

    } catch (error) {
      console.error(
        "PRODUCT DETAIL HATASI:",
        error.response?.data || error.message
      );

      
      // Hata olduğunda FETCHING değil FAILED olacak.
      dispatch(
        setFetchState("FAILED")
      );
    }
  };
};