import Header from "./layout/Header";
import PageContent from "./layout/PageContent";
import Footer from "./layout/Footer";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { verifyToken } from "./store/actions/clientActions.js";
import { fetchCategories } from "./store/actions/productActions.js";


export default function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(verifyToken());
    dispatch(fetchCategories());
  },[dispatch]);

  const location = useLocation();
  const hiddenFooter = location.pathname ==="/contact";

  return (
    <div className="flex min-h-screen flex-col">
      {!hiddenFooter && <Header />}
      <PageContent />
      {!hiddenFooter && <Footer />}
    <ToastContainer />
    </div>
  );
}