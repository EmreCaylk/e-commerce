import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import ShopPage from "../pages/ShopPage.jsx";
import ProductDetailPage from "../pages/ProductDetailPage.jsx";
import ShoppingCartPage from "../pages/ShoppingCartPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import TeamPage from "../pages/TeamPage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import Register from "../components/Register.jsx";
import Login from "../components/Login.jsx";

export default function PageContent() {
  return (
    <main className="flex w-full flex-1 flex-col">
      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/shop"
          element={<ShopPage />}
        />

        <Route
          path="/shop/:gender/:categoryName/:categoryId"
          element={<ShopPage />}
        />

        <Route
          path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId"
          element={<ProductDetailPage />}
        />

        {/* ================= SHOPPING CART ================= */}

        <Route
          path="/cart"
          element={<ShoppingCartPage />}
        />

        <Route
          path="/Contact"
          element={<ContactPage />}
        />

        <Route
          path="/team"
          element={<TeamPage />}
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
          path="/signup"
          element={<Register />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

      </Routes>
    </main>
  );
}