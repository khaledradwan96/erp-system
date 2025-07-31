// ===== App.jsx =====
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import Sales from "./pages/Sales";
import Inventory from "./pages/Inventory";
import HR from "./pages/HR";
import Accounting from "./pages/Accounting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          {/* === Default Page ===  */}
          <Route index element={<Navigate to="dashboard" replace />} />

          {/* === App Pages ===  */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="sales" element={<Sales />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="hr" element={<HR />} />
          <Route path="accounting" element={<Accounting />} />

          {/* === NotFound link ===  */}
          <Route path="*" element={<Navigate to="dashboard" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
