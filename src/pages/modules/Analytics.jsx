import { useEffect, useState } from 'react';
import { getAnalyticsData } from '../../data/sampleData';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { TrendingUp, BarChart3, PieChart as PieChartIcon, Trophy } from 'lucide-react';

const Analytics = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(getAnalyticsData());
  }, []);

  const COLORS = ['#f97316', '#3b82f6', '#10b981', '#f59e0b'];

  if (!data) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
          <p className="mt-4 text-gray-600">Loading analytics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics</h1>
        <p className="text-gray-600">Business insights and performance metrics</p>
      </div>

      {/* Sales Trends Chart */}
      <div className="card">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Sales Trends</h2>
            <p className="text-sm text-gray-600">Monthly sales performance</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data.salesTrends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#f97316"
              strokeWidth={2}
              name="Sales (KSh)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Stock Turnover Chart */}
      <div className="card">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Stock Turnover</h2>
            <p className="text-sm text-gray-600">Turnover rate by produce type</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.stockTurnover}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="produce" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="turnover" fill="#10b981" name="Turnover %" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profit Margin Chart */}
        <div className="card">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <PieChartIcon className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Profit Margin</h2>
              <p className="text-sm text-gray-600">Profit vs cost distribution</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data.profitMargin}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.profitMargin.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Agent Performance */}
        <div className="card">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Trophy className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Agent Performance</h2>
              <p className="text-sm text-gray-600">Top performing sales agents</p>
            </div>
          </div>
          <div className="space-y-4">
            {data.agentPerformance.map((agent, index) => (
              <div key={agent.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                    index === 0 ? 'bg-yellow-500' :
                    index === 1 ? 'bg-gray-400' :
                    index === 2 ? 'bg-orange-600' :
                    'bg-gray-300'
                  }`}>
                    {agent.rank}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{agent.name}</p>
                    <p className="text-sm text-gray-600">Rank #{agent.rank}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary-600">
                    KSh {agent.sales.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500">Total Sales</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

