// Sample mock data for the application

export const initialProduceTypes = [
  'Beans',
  'Maize',
  'Rice',
  'Wheat',
  'Sorghum',
  'Millet',
];

export const initialBranches = [
  'Nairobi Main',
  'Mombasa Branch',
  'Kisumu Branch',
  'Eldoret Branch',
];

// Sample users for quick login/testing
export const getSampleUsers = () => [
  {
    id: 'user-ceo',
    fullName: 'Amina Mwangi',
    email: 'ceo@goldencrop.com',
    phone: '+254700000001',
    role: 'CEO',
    password: 'password123',
    createdAt: new Date('2024-01-01T08:00:00').toISOString(),
  },
  {
    id: 'user-manager',
    fullName: 'Michael Otieno',
    email: 'manager@goldencrop.com',
    phone: '+254700000002',
    role: 'Manager',
    password: 'password123',
    createdAt: new Date('2024-01-02T09:15:00').toISOString(),
  },
  {
    id: 'user-agent',
    fullName: 'Grace Wambui',
    email: 'agent@goldencrop.com',
    phone: '+254700000003',
    role: 'Sales Agent',
    password: 'password123',
    createdAt: new Date('2024-01-03T10:45:00').toISOString(),
  },
];

// Sample procurement data
export const getInitialProcurements = () => [
  {
    id: 'proc-1',
    produceName: 'Beans',
    produceType: 'Beans',
    tonnage: 50,
    cost: 2500000,
    dealerName: 'Green Fields Ltd',
    branch: 'Nairobi Main',
    dealerContact: '+254712345678',
    sellingPrice: 60000,
    dateTime: new Date('2024-01-15T10:30:00').toISOString(),
  },
  {
    id: 'proc-2',
    produceName: 'Maize',
    produceType: 'Maize',
    tonnage: 100,
    cost: 3500000,
    dealerName: 'Farm Fresh Co',
    branch: 'Mombasa Branch',
    dealerContact: '+254723456789',
    sellingPrice: 40000,
    dateTime: new Date('2024-01-16T14:20:00').toISOString(),
  },
];

// Sample sales data
export const getInitialSales = () => [
  {
    id: 'sale-1',
    produceName: 'Beans',
    tonnage: 20,
    amountPaid: 1200000,
    buyerName: 'John Doe',
    salesAgent: 'Agent 1',
    buyerContact: '+254734567890',
    dateTime: new Date('2024-01-20T09:15:00').toISOString(),
  },
  {
    id: 'sale-2',
    produceName: 'Maize',
    tonnage: 30,
    amountPaid: 1200000,
    buyerName: 'Jane Smith',
    salesAgent: 'Agent 2',
    buyerContact: '+254745678901',
    dateTime: new Date('2024-01-21T11:30:00').toISOString(),
  },
];

// Sample credit sales data
export const getInitialCreditSales = () => [
  {
    id: 'credit-1',
    buyerName: 'ABC Traders',
    nationalId: '12345678',
    location: 'Nairobi',
    amountDue: 500000,
    dueDate: '2024-02-15',
    produceName: 'Beans',
    tonnage: 10,
    dateTime: new Date('2024-01-22T10:00:00').toISOString(),
    status: 'pending',
  },
  {
    id: 'credit-2',
    buyerName: 'XYZ Enterprises',
    nationalId: '87654321',
    location: 'Mombasa',
    amountDue: 300000,
    dueDate: '2024-02-10',
    produceName: 'Maize',
    tonnage: 15,
    dateTime: new Date('2024-01-23T14:00:00').toISOString(),
    status: 'pending',
  },
];

// Sample analytics data
export const getAnalyticsData = () => ({
  salesTrends: [
    { month: 'Jan', sales: 2400000 },
    { month: 'Feb', sales: 2800000 },
    { month: 'Mar', sales: 3200000 },
    { month: 'Apr', sales: 2900000 },
    { month: 'May', sales: 3500000 },
    { month: 'Jun', sales: 3800000 },
  ],
  stockTurnover: [
    { produce: 'Beans', turnover: 85 },
    { produce: 'Maize', turnover: 92 },
    { produce: 'Rice', turnover: 78 },
    { produce: 'Wheat', turnover: 65 },
  ],
  profitMargin: [
    { name: 'Profit', value: 65 },
    { name: 'Cost', value: 35 },
  ],
  agentPerformance: [
    { name: 'Agent 1', sales: 4500000, rank: 1 },
    { name: 'Agent 2', sales: 3800000, rank: 2 },
    { name: 'Agent 3', sales: 3200000, rank: 3 },
    { name: 'Agent 4', sales: 2800000, rank: 4 },
  ],
});

