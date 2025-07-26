// ===== Sales.jsx =====
import React from "react";
import salesData, {
  getTotalSales,
  getTotalTransactions,
} from "../data/salesData";

function Sales() {
  const totalSales = getTotalSales();
  const totalTransactions = getTotalTransactions();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Sales Dashboard</h2>
      {/* === Summary Cards === */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-teal-600 text-white shadow-md rounded-xl p-6">
          <h4 className="text-lg font-semibold mb-2">Total Sales</h4>
          <span className="text-2xl font-bold">
            ${totalSales.toLocaleString()}
          </span>
        </div>
        <div className="bg-yellow-500 text-white shadow-md rounded-xl p-6">
          <h4 className="text-lg font-semibold mb-2">Orders</h4>
          <span className="text-2xl font-bold">{totalTransactions}</span>
        </div>
      </div>

      {/* === Transactions Table === */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-xl">
          <thead className="bg-teal-700 text-white">
            <tr>
              <th className="text-left p-4 font-medium">Invoice No</th>
              <th className="text-left p-4 font-medium">Customer</th>
              <th className="text-left p-4 font-medium">Product</th>
              <th className="text-left p-4 font-medium">Price</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((item, index) => (
              <tr
                key={index}
                className="border-t border-teal-700 hover:bg-teal-600 cursor-pointer"
              >
                <td className="p-4">{item.invoiceNo}</td>
                <td className="p-4">{item.customer}</td>
                <td className="p-4">{item.product}</td>
                <td className="p-4">${item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Sales;
