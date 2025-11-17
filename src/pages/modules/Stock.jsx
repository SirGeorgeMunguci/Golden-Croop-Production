import { useState, useEffect } from 'react';
import { storage } from '../../utils/storage';
import { Package, AlertTriangle, CheckCircle } from 'lucide-react';

const Stock = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    calculateStock();
  }, []);

  const calculateStock = () => {
    const procurements = storage.getProcurements();
    const sales = storage.getSales();

    // Group by produce name
    const stockMap = {};

    // Add procurements
    procurements.forEach(proc => {
      if (!stockMap[proc.produceName]) {
        stockMap[proc.produceName] = {
          produce: proc.produceName,
          totalProcured: 0,
          totalSold: 0,
          balance: 0,
        };
      }
      stockMap[proc.produceName].totalProcured += proc.tonnage;
    });

    // Subtract sales
    sales.forEach(sale => {
      if (stockMap[sale.produceName]) {
        stockMap[sale.produceName].totalSold += sale.tonnage;
      }
    });

    // Calculate balance and status
    const stock = Object.values(stockMap).map(item => {
      const balance = item.totalProcured - item.totalSold;
      let status = 'In Stock';
      if (balance <= 0) {
        status = 'Out';
      } else if (balance < item.totalProcured * 0.2) {
        status = 'Low';
      }

      return {
        ...item,
        balance,
        status,
      };
    });

    setStockData(stock);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'In Stock':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'Low':
        return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
      case 'Out':
        return <AlertTriangle className="w-5 h-5 text-red-600" />;
      default:
        return <Package className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Stock':
        return 'bg-green-100 text-green-700';
      case 'Low':
        return 'bg-yellow-100 text-yellow-700';
      case 'Out':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Stock Management</h1>
        <p className="text-gray-600">Monitor stock levels and availability</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Items</p>
              <p className="text-2xl font-bold text-gray-900">{stockData.length}</p>
            </div>
            <Package className="w-8 h-8 text-primary-600" />
          </div>
        </div>
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">In Stock</p>
              <p className="text-2xl font-bold text-green-600">
                {stockData.filter(s => s.status === 'In Stock').length}
              </p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
        </div>
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Low Stock</p>
              <p className="text-2xl font-bold text-yellow-600">
                {stockData.filter(s => s.status === 'Low').length}
              </p>
            </div>
            <AlertTriangle className="w-8 h-8 text-yellow-600" />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Produce</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Total Procured</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Total Sold</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Balance</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {stockData.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-8 text-gray-500">
                    No stock data available. Add procurements and sales to see stock levels.
                  </td>
                </tr>
              ) : (
                stockData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{item.produce}</td>
                    <td className="py-3 px-4">{item.totalProcured.toFixed(2)} tons</td>
                    <td className="py-3 px-4">{item.totalSold.toFixed(2)} tons</td>
                    <td className="py-3 px-4 font-semibold">{item.balance.toFixed(2)} tons</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(item.status)}
                        <span className={`px-2 py-1 rounded text-sm ${getStatusColor(item.status)}`}>
                          {item.status}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Stock;

