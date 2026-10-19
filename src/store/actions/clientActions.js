import api, {
  setAuthToken,
  removeAuthToken,
} from "../../api/api.js";

import {
  SET_USER,
  SET_ROLES,
  SET_THEME,
  SET_LANGUAGE,
  SET_ADDRESS_LIST,
  SET_CREDIT_CARDS,
} from "../reducers/clientReducer.js";

// =====================================================
// SET USER
// =====================================================

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

// =====================================================
// SET ADDRESS LIST
// =====================================================

export const setAddressList = (addressList) => {
  return {
    type: SET_ADDRESS_LIST,
    payload: addressList,
  };
};

// =====================================================
// SET CREDIT CARDS
// =====================================================

export const setCreditCards = (creditCards) => {
  return {
    type: SET_CREDIT_CARDS,
    payload: creditCards,
  };
};

// =====================================================
// SET ROLES
// =====================================================

export const setRoles = (roles) => {
  return {
    type: SET_ROLES,
    payload: roles,
  };
};

// =====================================================
// SET THEME
// =====================================================

export const setTheme = (theme) => {
  return {
    type: SET_THEME,
    payload: theme,
  };
};

// =====================================================
// SET LANGUAGE
// =====================================================

export const setLanguage = (language) => {
  return {
    type: SET_LANGUAGE,
    payload: language,
  };
};

// =====================================================
// FETCH ROLES
// =====================================================

export const fetchRoles = () => {
  return async (dispatch, getState) => {
    const roles = getState().client.roles;

    if (roles.length > 0) {
      return;
    }

    try {
      const response = await api.get("/roles");

      dispatch(setRoles(response.data));

      return response.data;
    } catch (error) {
      console.error(
        "Roles alınamadı:",
        error.response?.data || error.message
      );

      throw error;
    }
  };
};

// =====================================================
// LOGIN
// =====================================================

export const loginUser = (loginData) => {
  return async (dispatch) => {
    try {
      const response = await api.post("/login", {
        email: loginData.email,
        password: loginData.password,
      });

      // Kullanıcıyı Redux'a kaydet
      dispatch(setUser(response.data));

      // Token varsa Axios'a ekle
      if (response.data.token) {
        setAuthToken(response.data.token);
      }

      // Remember Me seçiliyse token'ı kaydet
      if (
        loginData.rememberMe &&
        response.data.token
      ) {
        localStorage.setItem(
          "token",
          response.data.token
        );
      }

      return response.data;
    } catch (error) {
      console.error(
        "LOGIN HATASI:",
        error.response?.data || error.message
      );

      throw error;
    }
  };
};

// =====================================================
// VERIFY TOKEN
// =====================================================

export const verifyToken = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    if (!token) {
      return;
    }

    try {
      // Token'ı Axios header'a ekle
      setAuthToken(token);

      // Token doğrulama
      const response = await api.get("/verify");

      // Kullanıcıyı Redux'a kaydet
      dispatch(setUser(response.data));

      // Backend yeni token gönderirse yenile
      if (response.data.token) {
        localStorage.setItem(
          "token",
          response.data.token
        );

        setAuthToken(
          response.data.token
        );
      }
    } catch (error) {
      console.error(
        "TOKEN VERIFY HATASI:",
        error.response?.data || error.message
      );

      // Geçersiz token'ı temizle
      localStorage.removeItem("token");

      // Axios header'ını temizle
      removeAuthToken();

      // Redux user'ı temizle
      dispatch(setUser({}));
    }
  };
};

// =====================================================
// GET ADDRESSES
// =====================================================

export const fetchAddresses = () => {
  return async (dispatch) => {
    try {
      const response = await api.get(
        "/user/address"
      );

      dispatch(
        setAddressList(response.data)
      );

      return response.data;
    } catch (error) {
      console.error(
        "ADRESLER ALINAMADI:",
        error.response?.data || error.message
      );

      throw error;
    }
  };
};

// =====================================================
// ADD ADDRESS
// =====================================================

export const addAddress = (addressData) => {
  return async (dispatch) => {
    try {
      const response = await api.post(
        "/user/address",
        addressData
      );

      // Listeyi güncelle
      await dispatch(
        fetchAddresses()
      );

      return response.data;
    } catch (error) {
      console.error(
        "ADRES EKLENEMEDI:",
        error.response?.data || error.message
      );

      throw error;
    }
  };
};

// =====================================================
// UPDATE ADDRESS
// =====================================================

export const updateAddress = (addressData) => {
  return async (dispatch) => {
    try {
      const response = await api.put(
        "/user/address",
        addressData
      );

      // Listeyi güncelle
      await dispatch(
        fetchAddresses()
      );

      return response.data;
    } catch (error) {
      console.error(
        "ADRES GÜNCELLENEMEDI:",
        error.response?.data || error.message
      );

      throw error;
    }
  };
};

// =====================================================
// DELETE ADDRESS
// =====================================================

export const deleteAddress = (addressId) => {
  return async (dispatch) => {
    try {
      const response = await api.delete(
        `/user/address/${addressId}`
      );

      // Listeyi güncelle
      await dispatch(
        fetchAddresses()
      );

      return response.data;
    } catch (error) {
      console.error(
        "ADRES SILINEMEDI:",
        error.response?.data || error.message
      );

      throw error;
    }
  };
};

// =====================================================
// GET CREDIT CARDS
// =====================================================

export const fetchCreditCards = () => {
  return async (dispatch) => {
    try {
      const response = await api.get(
        "/user/card"
      );

      dispatch(
        setCreditCards(response.data)
      );

      return response.data;
    } catch (error) {
      console.error(
        "KARTLAR ALINAMADI:",
        error.response?.data || error.message
      );

      throw error;
    }
  };
};

// =====================================================
// ADD CREDIT CARD
// =====================================================

export const addCreditCard = (cardData) => {
  return async (dispatch) => {
    try {
      const response = await api.post(
        "/user/card",
        cardData
      );

      // Kart listesini güncelle
      await dispatch(
        fetchCreditCards()
      );

      return response.data;
    } catch (error) {
      console.error(
        "KART EKLENEMEDI:",
        error.response?.data || error.message
      );

      throw error;
    }
  };
};

// =====================================================
// UPDATE CREDIT CARD
// =====================================================

export const updateCreditCard = (cardData) => {
  return async (dispatch) => {
    try {
      const response = await api.put(
        "/user/card",
        cardData
      );

      // Kart listesini güncelle
      await dispatch(
        fetchCreditCards()
      );

      return response.data;
    } catch (error) {
      console.error(
        "KART GÜNCELLENEMEDI:",
        error.response?.data || error.message
      );

      throw error;
    }
  };
};

// =====================================================
// DELETE CREDIT CARD
// =====================================================

export const deleteCreditCard = (cardId) => {
  return async (dispatch) => {
    try {
      const response = await api.delete(
        `/user/card/${cardId}`
      );

      // Kart listesini güncelle
      await dispatch(
        fetchCreditCards()
      );

      return response.data;
    } catch (error) {
      console.error(
        "KART SILINEMEDI:",
        error.response?.data || error.message
      );

      throw error;
    }
  };
};



// =====================================================
// CREATE ORDER
// =====================================================

export const createOrder = (orderData) => {
  return async () => {
    try {
      const response = await api.post(
        "/order",
        orderData
      );

      return response.data;
    } catch (error) {
      console.error(
        "SİPARİŞ OLUŞTURULAMADI:",
        error.response?.data || error.message
      );

      throw error;
    }
  };
};
// =====================================================
// GET PREVIOUS ORDERS
// =====================================================

export const fetchOrders = () => {
  return async (dispatch) => {
    try {
      const response = await api.get("/order");

      return response.data;
    } catch (error) {
      console.error(
        "SİPARİŞLER ALINAMADI:",
        error.response?.data ||
          error.message
      );

      throw error;
    }
  };
};