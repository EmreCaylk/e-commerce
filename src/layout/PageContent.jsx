import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage.jsx";
import ShopPage from "../pages/ShopPage.jsx";
import ProductDetailPage from "../pages/ProductDetailPage.jsx";
import ShoppingCartPage from "../pages/ShoppingCartPage.jsx";
import CreateOrderPage from "../pages/CreateOrderPage.jsx";

import ContactPage from "../pages/ContactPage.jsx";
import TeamPage from "../pages/TeamPage.jsx";
import AboutPage from "../pages/AboutPage.jsx";

import Register from "../components/Register.jsx";
import Login from "../components/Login.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";

export default function PageContent() {
  return (
    <main className="flex w-full flex-1 flex-col">
      <Routes>

        {/* ================= HOME ================= */}

        <Route
          path="/"
          element={<HomePage />}
        />


        {/* ================= SHOP ================= */}

        <Route
          path="/shop"
          element={<ShopPage />}
        />

        <Route
          path="/shop/:gender/:categoryName/:categoryId"
          element={<ShopPage />}
        />


        {/* ================= PRODUCT DETAIL ================= */}

        <Route
          path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId"
          element={<ProductDetailPage />}
        />


        {/* ================= SHOPPING CART ================= */}

        <Route
          path="/cart"
          element={<ShoppingCartPage />}
        />


        {/* ================= CREATE ORDER ================= */}

        <Route
          path="/order"
          element={
            <ProtectedRoute>
              <CreateOrderPage />
            </ProtectedRoute>
          }
        />


        {/* ================= CONTACT ================= */}

        <Route
          path="/Contact"
          element={<ContactPage />}
        />


        {/* ================= TEAM ================= */}

        <Route
          path="/team"
          element={<TeamPage />}
        />


        {/* ================= ABOUT ================= */}

        <Route
          path="/about"
          element={<AboutPage />}
        />


        {/* ================= REGISTER ================= */}

        <Route
          path="/signup"
          element={<Register />}
        />


        {/* ================= LOGIN ================= */}

        <Route
          path="/login"
          element={<Login />}
        />

      </Routes>
    </main>
  );
}