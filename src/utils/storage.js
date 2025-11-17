// Utility functions for localStorage operations
import { 
  getInitialProcurements, 
  getInitialSales, 
  getInitialCreditSales,
  getSampleUsers,
} from '../data/sampleData';

export const storage = {
  // Users
  getUsers: () => {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  },
  
  saveUser: (user) => {
    const users = storage.getUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  },
  
  // Current user session
  getCurrentUser: () => {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  },
  
  setCurrentUser: (user) => {
    localStorage.setItem('currentUser', JSON.stringify(user));
  },
  
  clearCurrentUser: () => {
    localStorage.removeItem('currentUser');
  },
  
  // Procurements
  getProcurements: () => {
    const procurements = localStorage.getItem('procurements');
    return procurements ? JSON.parse(procurements) : [];
  },
  
  saveProcurements: (procurements) => {
    localStorage.setItem('procurements', JSON.stringify(procurements));
  },
  
  // Sales
  getSales: () => {
    const sales = localStorage.getItem('sales');
    return sales ? JSON.parse(sales) : [];
  },
  
  saveSales: (sales) => {
    localStorage.setItem('sales', JSON.stringify(sales));
  },
  
  // Credit Sales
  getCreditSales: () => {
    const creditSales = localStorage.getItem('creditSales');
    return creditSales ? JSON.parse(creditSales) : [];
  },
  
  saveCreditSales: (creditSales) => {
    localStorage.setItem('creditSales', JSON.stringify(creditSales));
  },
  
  // User Profile
  getUserProfile: (userId) => {
    const profiles = storage.getUserProfiles();
    return profiles.find(p => p.userId === userId) || null;
  },
  
  getUserProfiles: () => {
    const profiles = localStorage.getItem('userProfiles');
    return profiles ? JSON.parse(profiles) : [];
  },
  
  saveUserProfile: (profile) => {
    const profiles = storage.getUserProfiles();
    const existingIndex = profiles.findIndex(p => p.userId === profile.userId);
    if (existingIndex >= 0) {
      profiles[existingIndex] = profile;
    } else {
      profiles.push(profile);
    }
    localStorage.setItem('userProfiles', JSON.stringify(profiles));
  },
  
  // I CAN data
  getICanData: (userId) => {
    const iCanData = localStorage.getItem('iCanData');
    const allData = iCanData ? JSON.parse(iCanData) : [];
    return allData.find(d => d.userId === userId) || null;
  },
  
  saveICanData: (data) => {
    const iCanData = localStorage.getItem('iCanData');
    const allData = iCanData ? JSON.parse(iCanData) : [];
    const existingIndex = allData.findIndex(d => d.userId === data.userId);
    if (existingIndex >= 0) {
      allData[existingIndex] = data;
    } else {
      allData.push(data);
    }
    localStorage.setItem('iCanData', JSON.stringify(allData));
  },
};

// Initialize sample data if not exists
export const initializeSampleData = () => {
  if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(getSampleUsers()));
  }

  if (!localStorage.getItem('procurements')) {
    storage.saveProcurements(getInitialProcurements());
  }
  
  if (!localStorage.getItem('sales')) {
    storage.saveSales(getInitialSales());
  }
  
  if (!localStorage.getItem('creditSales')) {
    storage.saveCreditSales(getInitialCreditSales());
  }
};

