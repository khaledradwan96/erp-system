// ===== Layout.jsx =====
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex min-h-screen">
      <div className="fixed top-0 left-0 w-64">
        <Sidebar />
      </div>
      <div className="flex-1 mt-6 ml-64">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
