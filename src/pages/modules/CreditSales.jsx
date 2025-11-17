import { useState, useEffect } from 'react';
import { storage } from '../../utils/storage';
import { initialProduceTypes } from '../../data/sampleData';
import { Plus, Calendar, AlertCircle } from 'lucide-react';

const CreditSales = () => {
  const [creditSales, setCreditSales] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    buyerName: '',
    nationalId: '',
    location: '',
    amountDue: '',
    dueDate: '',
    produceName: '',
    tonnage: '',
  });

  useEffect(() => {
    loadCreditSales();
  }, []);

  const loadCreditSales = () => {
    const data = storage.getCreditSales();
    setCreditSales(data);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const creditSale = {
      id: `credit-${Date.now()}`,
      ...formData,
      tonnage: parseFloat(formData.tonnage),
      amountDue: parseFloat(formData.amountDue),
      dateTime: new Date().toISOString(),
      status: 'pending',
    };

    const updated = [...creditSales, creditSale];
    storage.saveCreditSales(updated);
    loadCreditSales();
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      buyerName: '',
      nationalId: '',
      location: '',
      amountDue: '',
      dueDate: '',
      produceName: '',
      tonnage: '',
    });
    setShowForm(false);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  const getDaysRemaining = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getTotalOutstanding = () => {
    return creditSales.reduce((sum, credit) => sum + credit.amountDue, 0);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Credit Sales</h1>
          <p className="text-gray-600">Manage credit sales and outstanding balances</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="btn-primary flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>{showForm ? 'Cancel' : 'Add Credit Sale'}</span>
        </button>
      </div>

      {/* Outstanding Balance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Outstanding</p>
              <p className="text-2xl font-bold text-red-600">
                KSh {getTotalOutstanding().toLocaleString()}
              </p>
            </div>
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>
        </div>
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Active Credits</p>
              <p className="text-2xl font-bold text-gray-900">{creditSales.length}</p>
            </div>
            <Calendar className="w-8 h-8 text-primary-600" />
          </div>
        </div>
      </div>

      {showForm && (
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">New Credit Sale</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Buyer Name
                </label>
                <input
                  type="text"
                  name="buyerName"
                  value={formData.buyerName}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  National ID
                </label>
                <input
                  type="text"
                  name="nationalId"
                  value={formData.nationalId}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount Due (KSh)
                </label>
                <input
                  type="number"
                  name="amountDue"
                  value={formData.amountDue}
                  onChange={handleChange}
                  className="input-field"
                  step="0.01"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Due Date
                </label>
                <input
                  type="date"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Produce Name
                </label>
                <select
                  name="produceName"
                  value={formData.produceName}
                  onChange={handleChange}
                  className="input-field"
                  required
                >
                  <option value="">Select produce</option>
                  {initialProduceTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tonnage
                </label>
                <input
                  type="number"
                  name="tonnage"
                  value={formData.tonnage}
                  onChange={handleChange}
                  className="input-field"
                  step="0.01"
                  required
                />
              </div>
            </div>

            <div className="flex space-x-3 pt-4">
              <button type="submit" className="btn-primary">
                Record Credit Sale
              </button>
              <button type="button" onClick={resetForm} className="btn-secondary">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Buyer</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">National ID</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Location</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Amount Due</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Due Date</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Days Remaining</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {creditSales.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-8 text-gray-500">
                    No credit sales found. Add your first credit sale.
                  </td>
                </tr>
              ) : (
                creditSales.map((credit) => {
                  const daysRemaining = getDaysRemaining(credit.dueDate);
                  return (
                    <tr key={credit.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4">{credit.buyerName}</td>
                      <td className="py-3 px-4">{credit.nationalId}</td>
                      <td className="py-3 px-4">{credit.location}</td>
                      <td className="py-3 px-4">KSh {credit.amountDue.toLocaleString()}</td>
                      <td className="py-3 px-4">{formatDate(credit.dueDate)}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded text-sm ${
                          daysRemaining < 0 
                            ? 'bg-red-100 text-red-700' 
                            : daysRemaining < 7 
                            ? 'bg-yellow-100 text-yellow-700' 
                            : 'bg-green-100 text-green-700'
                        }`}>
                          {daysRemaining < 0 ? `Overdue by ${Math.abs(daysRemaining)} days` : `${daysRemaining} days`}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-sm">
                          {credit.status}
                        </span>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CreditSales;

