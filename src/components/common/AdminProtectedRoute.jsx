import { Navigate, Outlet } from "react-router-dom";

function AdminProtectedRoute() {
  const isLoggedIn = localStorage.getItem("civicconnect_logged_in");

  if (isLoggedIn !== "true") {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default AdminProtectedRoute;