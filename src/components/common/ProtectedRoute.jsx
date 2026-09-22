import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const isLoggedIn = localStorage.getItem("civicconnect_logged_in");

  if (isLoggedIn !== "true") {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;