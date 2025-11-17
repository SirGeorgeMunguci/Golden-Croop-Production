# Golden Crop Distributors Ltd – Produce Management System (Frontend MVP)

A comprehensive frontend application for managing produce procurement, sales, credit sales, stock, and analytics. Built with React, Vite, and TailwindCSS.

## 🚀 Features

### Authentication
- User signup with role selection (CEO, Manager, Sales Agent)
- Secure login system
- Protected routes
- Session management with localStorage

### Dashboard (Role-Based)
- **CEO Dashboard**: Overview of total stock, sales, profit trends, and top agents
- **Manager Dashboard**: Procurement overview, sales summary, and stock levels
- **Sales Agent Dashboard**: Quick actions for adding procurement, sales, and credit sales

### Profile Management
- View and edit user profile
- Upload profile picture (base64 preview)
- Save profile data to localStorage

### "I CAN" Section
- Record skills and capabilities
- Write bio and what you can do
- Save to localStorage

### Procurement Module
- Add, edit, and delete procurement records
- Track produce name, type, tonnage, cost, dealer information
- Auto-generated date and time
- Full CRUD operations

### Sales Module
- Record sales transactions
- Generate receipts
- Track buyer information
- Automatically updates stock levels

### Credit Sales Module
- Record credit sales with buyer details
- Track outstanding balances
- Monitor due dates and days remaining
- Status indicators (pending, overdue)

### Stock Management
- Real-time stock calculation
- Track total procured vs total sold
- Balance monitoring
- Status indicators (In Stock, Low, Out)

### Analytics
- Sales trends line chart
- Stock turnover bar chart
- Profit margin donut chart
- Agent performance rankings

## 📁 Project Structure

```
src/
 ├── components/
 │   ├── layout/
 │   │   ├── Sidebar.jsx
 │   │   ├── Topbar.jsx
 │   │   └── DashboardLayout.jsx
 │   └── Toast.jsx
 ├── pages/
 │   ├── auth/
 │   │   ├── Login.jsx
 │   │   └── Signup.jsx
 │   ├── dashboard/
 │   │   └── Dashboard.jsx
 │   ├── modules/
 │   │   ├── Procurement.jsx
 │   │   ├── Sales.jsx
 │   │   ├── CreditSales.jsx
 │   │   ├── Stock.jsx
 │   │   └── Analytics.jsx
 │   ├── Profile.jsx
 │   └── ICan.jsx
 ├── context/
 │   └── AuthContext.jsx
 ├── data/
 │   └── sampleData.js
 ├── utils/
 │   └── storage.js
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

## 🛠️ Installation

1. **Clone or download the project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎨 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Recharts** - Chart library for analytics
- **Lucide React** - Icon library
- **localStorage** - Data persistence (mock backend)

## 📝 Usage

### First Time Setup

1. Start the application
2. Click "Sign up" to create a new account
3. Fill in your details and select your role
4. After signup, you'll be redirected to login
5. Login with your credentials
6. You'll be taken to your role-based dashboard

### Sample Data

The application comes with sample data pre-loaded:
- Sample procurements
- Sample sales
- Sample credit sales
- Sample analytics data
- Sample user accounts for each role

All data is stored in browser localStorage and persists across sessions.

### Sample Accounts

Use these ready-made accounts to explore each dashboard quickly:

| Role | Email | Password |
| --- | --- | --- |
| CEO | `ceo@goldencrop.com` | `password123` |
| Manager | `manager@goldencrop.com` | `password123` |
| Sales Agent | `agent@goldencrop.com` | `password123` |

You can still create additional accounts via the signup page.

### Features by Role

**CEO:**
- View overall business metrics
- See profit trends
- Monitor top agents

**Manager:**
- View procurement and sales summaries
- Monitor stock levels
- Access analytics

**Sales Agent:**
- Add procurement records
- Record sales
- Record credit sales
- View daily performance

## 🔐 Data Storage

All data is stored in browser localStorage:
- `users` - User accounts
- `currentUser` - Active session
- `procurements` - Procurement records
- `sales` - Sales records
- `creditSales` - Credit sales records
- `userProfiles` - User profile data
- `iCanData` - I CAN section data

## 🎯 Key Features

- ✅ Fully responsive design
- ✅ Modern UI with TailwindCSS
- ✅ Role-based access control
- ✅ Real-time stock calculations
- ✅ Interactive charts and analytics
- ✅ Form validation
- ✅ Toast notifications
- ✅ Modal dialogs
- ✅ Receipt generation
- ✅ Profile picture upload
- ✅ Search functionality (UI ready)

## 🚧 Future Enhancements

- Backend API integration
- Real-time data synchronization
- Export functionality (PDF, Excel)
- Advanced filtering and search
- Email notifications
- Multi-branch management
- Payment tracking for credit sales

## 📄 License

This project is created for educational purposes.

## 👤 Author

Golden Crop Distributors Ltd - Exam Project

---

**Note:** This is a frontend-only application. All data is stored locally in the browser. For production use, integrate with a backend API.

