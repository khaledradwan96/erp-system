// ===== dataFunctions.js =====
import salesData from "./salesData";

export const getTotalSales = () => {
  return salesData.reduce((sum, sale) => sum + sale.price, 0);
};

export function getTotalTransactions() {
  return salesData.length;
}

const monthFormatter = new Intl.DateTimeFormat("en-US", { month: "long" });

export function getSalesByDate() {
  const grouped = {};

  salesData.forEach(({ date, price }) => {
    const parsedDate = new Date(date);
    const monthName = monthFormatter.format(parsedDate);

    if (!grouped[monthName]) {
      grouped[monthName] = 0;
    }
    grouped[monthName] += price;
  });

  return Object.entries(grouped).map(([month, total]) => ({
    date: month,
    total,
  }));
}
