import api, {
  setAuthToken,
  removeAuthToken,
} from "../../api/api.js";

import {
  SET_USER,
  SET_ROLES,
  SET_THEME,
  SET_LANGUAGE,
} from "../reducers/clientReducer.js";


// ================= SET USER =================

export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user,
    };   
};

// ================= SET ROLES =================

export const setRoles = (roles) => {
    return{
        type: SET_ROLES,
        payload:roles,
    };
};

// ================= SET THEME =================

export const setTheme = (theme) => {
    return {
        type: SET_THEME,
        payload:theme,
    };
};

// ================= SET LANGUAGE =================

export const setLanguage = (language) => {
    return {
        type:SET_LANGUAGE,
        payload:language,
    };
};
// ================= FETCH ROLES THUNK =================

export const fetchRoles = () => {
    return (dispatch, getState) => {

        // Redux store'daki mevcut rolleri al
        const roles = getState().client.roles;

        // Roller daha önce geldiyse tekrar API isteği yapma
        if(roles.length > 0) {
            return;
        }
        // Roller yoksa API'den getir

        return api
        .get("/roles")
        .then((response)=>{
            dispatch(setRoles(response.data))
        })
        .catch((error)=>{
            console.error("Roles alınamadı:",error);
        });
    };
};

// ================= LOGIN USER THUNK =================

export const loginUser = (loginData) => {
  return async (dispatch) => {
    try {
      const response = await api.post("/login", {
        email: loginData.email,
        password: loginData.password,
      });

      // Kullanıcı bilgisini Redux Store'a kaydet
      dispatch(setUser(response.data));

      // Remember Me seçiliyse token'ı localStorage'a kaydet
      if (loginData.rememberMe && response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      return response.data;
    } catch (error) {
      throw error;
    }
  };
};

// ================= VERIFY TOKEN THUNK =================

export const verifyToken = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    // Token yoksa doğrulama yapma
    if (!token) {
      return;
    }

    try {
      // Token'ı Axios Authorization header'a ekle
      setAuthToken(token);

      // Token'ı backend'e doğrulat
      const response = await api.get("/verify");

      // Gelen kullanıcı bilgisini Redux'a koy
      dispatch(setUser(response.data));

      // Backend yeni token döndürüyorsa yenile
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        setAuthToken(response.data.token);
      }
    } catch (error) {
      console.error(
        "TOKEN VERIFY HATASI:",
        error.response?.data || error.message
      );

      // Token geçersizse temizle
      localStorage.removeItem("token");

      // Axios Authorization header'ını da temizle
      removeAuthToken();

      // Redux user'ı temizle
      dispatch(setUser({}));
    }
  };
};