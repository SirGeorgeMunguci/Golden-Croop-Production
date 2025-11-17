import { Plus } from 'lucide-react';

const demoProcurements = [
  {
    id: 'proc-1',
    item: 'Maize Flour 50kg',
    supplier: 'Mbarara Agro Suppliers',
    quantity: '120 Bags',
    cost: 'UGX 3,600,000',
    date: '12 Feb 2025',
    status: 'Delivered',
  },
  {
    id: 'proc-2',
    item: 'Rice 25kg',
    supplier: 'Eastern Traders',
    quantity: '80 Bags',
    cost: 'UGX 4,800,000',
    date: '11 Feb 2025',
    status: 'Pending',
  },
  {
    id: 'proc-3',
    item: 'Beans 90kg',
    supplier: 'Northern Farmers Co-op',
    quantity: '60 Bags',
    cost: 'UGX 2,400,000',
    date: '10 Feb 2025',
    status: 'Delivered',
  },
];

const Procurement = () => {
  return (
    <div className="space-y-6 pb-20 relative">
      <div className="page-header space-y-1">
        <h1 className="text-3xl font-bold text-gray-900">Procurement</h1>
        <p className="text-gray-600">Overview of all incoming product purchases</p>
      </div>

      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px]">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Item</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Supplier</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Quantity</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Cost</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {demoProcurements.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4">{item.item}</td>
                  <td className="py-3 px-4">{item.supplier}</td>
                  <td className="py-3 px-4">{item.quantity}</td>
                  <td className="py-3 px-4">{item.cost}</td>
                  <td className="py-3 px-4">{item.date}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.status === 'Delivered'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <button
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-primary-600 text-white text-3xl shadow-xl flex items-center justify-center hover:bg-primary-700 transition-transform hover:scale-110"
        title="Add New Procurement"
      >
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Procurement;

