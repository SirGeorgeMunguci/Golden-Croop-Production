import { Plus } from 'lucide-react';

const summaryCards = [
  { title: 'Total Sales', amount: 'UGX 12,450,000' },
  { title: "Today’s Sales", amount: 'UGX 1,250,000' },
  { title: 'Most Sold Item', amount: 'Maize Flour' },
];

const demoSales = [
  {
    id: 'sale-1',
    customer: 'Brian M.',
    item: 'Rice 5kg',
    quantity: 10,
    total: 'UGX 250,000',
    date: '12 Feb 2025',
  },
  {
    id: 'sale-2',
    customer: 'Aisha K.',
    item: 'Maize Flour',
    quantity: 7,
    total: 'UGX 210,000',
    date: '12 Feb 2025',
  },
  {
    id: 'sale-3',
    customer: 'Daniel O.',
    item: 'Beans Pack',
    quantity: 5,
    total: 'UGX 150,000',
    date: '11 Feb 2025',
  },
];

const Sales = () => {
  return (
    <div className="space-y-6 pb-20 relative">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold text-gray-900">Sales</h1>
        <p className="text-gray-600">Monitor customer purchases and daily revenue</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {summaryCards.map((card) => (
          <div key={card.title} className="card hover:shadow-lg transition-transform">
            <h4 className="text-sm text-gray-500">{card.title}</h4>
            <p className="text-2xl font-semibold text-primary-600">{card.amount}</p>
          </div>
        ))}
      </div>

      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Customer</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Item</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Quantity</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Total</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
              </tr>
            </thead>
            <tbody>
              {demoSales.map((sale) => (
                <tr
                  key={sale.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4">{sale.customer}</td>
                  <td className="py-3 px-4">{sale.item}</td>
                  <td className="py-3 px-4">{sale.quantity}</td>
                  <td className="py-3 px-4">{sale.total}</td>
                  <td className="py-3 px-4">{sale.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <button
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-primary-600 text-white text-3xl shadow-xl flex items-center justify-center hover:bg-primary-700 transition-transform hover:scale-110"
        title="Add New Sale"
      >
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Sales;

