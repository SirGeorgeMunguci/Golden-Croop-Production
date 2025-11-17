import { useAuth } from '../../context/AuthContext';
import { storage } from '../../utils/storage';
import { Package, DollarSign, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  getInitialProcurements,
  getInitialSales,
  getInitialCreditSales,
} from '../../data/sampleData';

const sampleProcurements = getInitialProcurements();
const sampleSales = getInitialSales();
const sampleCreditSales = getInitialCreditSales();

const SAMPLE_STATS = {
  totalStock:
    sampleProcurements.reduce((sum, p) => sum + p.tonnage, 0) -
    sampleSales.reduce((sum, s) => sum + s.tonnage, 0),
  totalSales: sampleSales.reduce((sum, s) => sum + s.amountPaid, 0),
  totalProcurements: sampleProcurements.length,
  totalCreditSales: sampleCreditSales.reduce((sum, c) => sum + c.amountDue, 0),
};

const StatCard = ({ to, title, value, icon: Icon, accent }) => (
  <Link
    to={to}
    className="card hover:shadow-lg transition-all cursor-pointer focus:ring-2 focus:ring-primary-500 focus:outline-none"
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600 mb-1">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
      <div className={`w-12 h-12 ${accent} rounded-lg flex items-center justify-center`}>
        <Icon className="w-6 h-6" />
      </div>
    </div>
  </Link>
);

const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalStock: 0,
    totalSales: 0,
    totalProcurements: 0,
    totalCreditSales: 0,
  });

  useEffect(() => {
    const procurements = storage.getProcurements();
    const sales = storage.getSales();
    const creditSales = storage.getCreditSales();

    const totalProcured = procurements.reduce((sum, p) => sum + p.tonnage, 0);
    const totalSold = sales.reduce((sum, s) => sum + s.tonnage, 0);
    const totalSalesAmount = sales.reduce((sum, s) => sum + s.amountPaid, 0);
    const totalCreditAmount = creditSales.reduce((sum, c) => sum + c.amountDue, 0);

    setStats({
      totalStock: totalProcured - totalSold || SAMPLE_STATS.totalStock,
      totalSales: totalSalesAmount || SAMPLE_STATS.totalSales,
      totalProcurements: procurements.length || SAMPLE_STATS.totalProcurements,
      totalCreditSales: totalCreditAmount || SAMPLE_STATS.totalCreditSales,
    });
  }, []);

  const renderCEODashboard = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">CEO Dashboard</h1>
        <p className="text-gray-600">Overview of your business operations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
        <StatCard
          to="/stock"
          title="Total Stock"
          value={`${stats.totalStock} tons`}
          icon={Package}
          accent="bg-blue-100 text-blue-600"
        />
        <StatCard
          to="/sales"
          title="Total Sales"
          value={`KSh ${stats.totalSales.toLocaleString()}`}
          icon={DollarSign}
          accent="bg-green-100 text-green-600"
        />
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Profit Trends</p>
              <p className="text-2xl font-bold text-gray-900">+12.5%</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Top Agents</p>
              <p className="text-2xl font-bold text-gray-900">5</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-700">New procurement added</span>
              <span className="text-xs text-gray-500">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-700">Sale completed</span>
              <span className="text-xs text-gray-500">5 hours ago</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-2">
            <button className="w-full btn-primary text-left px-4 py-2">
              Export Reports
            </button>
            <button className="w-full btn-secondary text-left px-4 py-2">
              View Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderManagerDashboard = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Manager Dashboard</h1>
        <p className="text-gray-600">Manage procurement and sales operations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
        <Link
          to="/procurement"
          className="card hover:shadow-lg transition-all focus:ring-2 focus:ring-primary-500"
        >
          <h3 className="text-lg font-semibold mb-2">Procurement Overview</h3>
          <p className="text-3xl font-bold text-primary-600">{stats.totalProcurements}</p>
          <p className="text-sm text-gray-600 mt-1">Total procurements</p>
        </Link>

        <Link
          to="/sales"
          className="card hover:shadow-lg transition-all focus:ring-2 focus:ring-primary-500"
        >
          <h3 className="text-lg font-semibold mb-2">Sales Summary</h3>
          <p className="text-3xl font-bold text-green-600">
            KSh {stats.totalSales.toLocaleString()}
          </p>
          <p className="text-sm text-gray-600 mt-1">Total sales</p>
        </Link>

        <Link
          to="/stock"
          className="card hover:shadow-lg transition-all focus:ring-2 focus:ring-primary-500"
        >
          <h3 className="text-lg font-semibold mb-2">Stock Levels</h3>
          <p className="text-3xl font-bold text-blue-600">{stats.totalStock} tons</p>
          <p className="text-sm text-gray-600 mt-1">Available stock</p>
        </Link>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold mb-4">Stock Status Chart</h2>
        <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
          <p className="text-gray-500">Chart visualization would go here</p>
        </div>
      </div>
    </div>
  );

  const renderSalesAgentDashboard = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Sales Agent Dashboard</h1>
        <p className="text-gray-600">Quick actions and daily performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <Link
          to="/procurement"
          className="card hover:shadow-lg transition-all cursor-pointer focus:ring-2 focus:ring-primary-500"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Add Procurement</h3>
              <p className="text-sm text-gray-600">Record new produce</p>
            </div>
          </div>
        </Link>

        <Link
          to="/sales"
          className="card hover:shadow-lg transition-all cursor-pointer focus:ring-2 focus:ring-primary-500"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Add Sale</h3>
              <p className="text-sm text-gray-600">Record a sale</p>
            </div>
          </div>
        </Link>

        <Link
          to="/credit-sales"
          className="card hover:shadow-lg transition-all cursor-pointer focus:ring-2 focus:ring-primary-500"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Add Credit Sale</h3>
              <p className="text-sm text-gray-600">Record credit sale</p>
            </div>
          </div>
        </Link>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold mb-4">Daily Performance</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-600">Today's Sales</span>
              <span className="text-sm font-semibold">KSh 0</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-primary-600 h-2 rounded-full" style={{ width: '0%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (user?.role === 'CEO') {
    return renderCEODashboard();
  } else if (user?.role === 'Manager') {
    return renderManagerDashboard();
  } else {
    return renderSalesAgentDashboard();
  }
};

export default Dashboard;

