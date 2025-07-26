// ===== Dashboard.jsx =====
import React from "react";

function Dashboard() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      {/* === Summary Cards === */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card title="Total Sales" value="$120,000" />
        <Card title="Products in Stock" value="350" />
        <Card title="Invoices" value="25" />
        <Card title="Employees" value="75" />
      </div>

      {/* === Chart === */}
      <div className="bg-white rounded-xl shadow p-4">
        <h3 className="text-lg font-semibold mb-2">Sales Overview</h3>
        <div className="h-64">{/* Placeholder for chart component */}</div>
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h4 className="text-sm text-gray-500">{title}</h4>
      <span className="text-xl font-bold">{value}</span>
    </div>
  );
}

export default Dashboard;
