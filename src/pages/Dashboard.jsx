// ===== Dashboard.jsx =====
import React from "react";
import { getTotalSales, getSalesByDate } from "../data/dataFunctions";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Dashboard() {
  const totalSales = getTotalSales();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
      {/* === Summary Cards === */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card title="Total Sales" value={`$${totalSales.toLocaleString()}`} />
        <Card title="Products in Stock" value="350" />
        <Card title="Invoices" value="25" />
        <Card title="Employees" value="75" />
      </div>

      {/* === Chart === */}
      <div className="bg-white rounded-xl shadow p-4">
        <h3 className="text-lg font-semibold mb-2">Sales Overview</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={getSalesByDate()}>
            <CartesianGrid
              stroke="#ccc"
              strokeDasharray="5 5"
              horizontal={true}
              vertical={false}
            />

            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="total"
              stroke="#14b8a6"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
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
