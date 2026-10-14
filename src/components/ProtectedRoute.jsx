import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const user = useSelector((state) => state.client.user);

  const token = localStorage.getItem("token");

  const isLoggedIn =
    (user && Object.keys(user).length > 0) || !!token;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}