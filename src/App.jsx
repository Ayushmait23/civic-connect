import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import ProtectedRoute from "./components/common/ProtectedRoute";
import AdminProtectedRoute from "./components/common/AdminProtectedRoute";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

import CitizenLayout from "./layouts/CitizenLayout";
import Dashboard from "./pages/Citizen/Dashboard";
import ReportIssue from "./pages/Citizen/ReportIssue";
import MyReports from "./pages/Citizen/MyReports";
import CityMap from "./pages/Citizen/CityMap";
import Notifications from "./pages/Citizen/Notifications";
import Settings from "./pages/Citizen/Settings";

import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminLayout from "./layouts/AdminLayout";
import AdminIssues from "./pages/Admin/AdminIssues";
import AdminMap from "./pages/Admin/AdminMap";
import AdminAnalytics from "./pages/Admin/AdminAnalytics";
import Citizens from "./pages/Admin/Citizens";
import AdminNotifications from "./pages/Admin/Notifications";
import AdminSettings from "./pages/Admin/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Citizen Pages */}
        <Route element={<CitizenLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/report" element={<ReportIssue />} />
          <Route path="/reports" element={<MyReports />} />
          <Route path="/map" element={<CityMap />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* Admin Pages */}
      
<Route element={<AdminLayout />}>
  <Route element={<AdminProtectedRoute />}>
    <Route path="/admin" element={<AdminDashboard />} />
    <Route path="/admin/issues" element={<AdminIssues />} />
    <Route path="/admin/map" element={<AdminMap />} />
    <Route path="/admin/analytics" element={<AdminAnalytics />} />
    <Route path="/admin/citizens" element={<Citizens />} />
    <Route path="/admin/notifications" element={<AdminNotifications />} />
    <Route path="/admin/settings" element={<AdminSettings />} />
  </Route>
</Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;