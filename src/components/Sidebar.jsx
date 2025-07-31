// ===== Sidebar.jsx =====
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaBook,
  FaChartLine,
  FaWarehouse,
  FaFileInvoice,
  FaUsers,
} from "react-icons/fa";

function Sidebar() {
  const menuPages = [
    { name: "Dashboard", path: "/dashboard", icon: <FaBook /> },
    { name: "Sales", path: "/sales", icon: <FaChartLine /> },
    { name: "Inventory", path: "/inventory", icon: <FaWarehouse /> },
    { name: "Accounting", path: "/accounting", icon: <FaFileInvoice /> },
    { name: "Human Resource", path: "/hr", icon: <FaUsers /> },
  ];

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="flex flex-col h-screen  bg-teal-600 text-white ">
      <div className=" flex items-center justify-between p-4 text-2xl font-bold border-b-2 border-teal-500">
        <span>ERP System</span>
        <button
          onClick={handleLogout}
          className="text-sm cursor-pointer bg-white text-teal-600 px-3 py-1 rounded hover:bg-red-600 hover:text-white transition"
        >
          Logout
        </button>
      </div>
      <nav className="flex-1">
        {menuPages.map((page) => (
          <NavLink
            key={page.name}
            to={page.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-4 rounded transition-all ${
                isActive ? "bg-teal-700 font-semibold" : "hover:bg-teal-700"
              }`
            }
          >
            <span className="text-lg">{page.icon}</span>
            <span className="text-lg">{page.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
