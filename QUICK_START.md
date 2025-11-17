# Quick Start Guide

## 🚀 Getting Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to `http://localhost:5173` (or the port shown in terminal)

## 📝 First Time Usage

1. **Sign Up**: Click "Sign up" to create a new account
   - Fill in your details
   - Select your role (CEO, Manager, or Sales Agent)
   - Create a password

2. **Login**: After signup, login with your credentials

3. **Explore**: You'll be taken to your role-based dashboard

## 🎯 Test Accounts (Optional)

Use these ready-made accounts to jump straight into each dashboard:

| Role | Email | Password |
| --- | --- | --- |
| CEO | `ceo@goldencrop.com` | `password123` |
| Manager | `manager@goldencrop.com` | `password123` |
| Sales Agent | `agent@goldencrop.com` | `password123` |

Feel free to create additional accounts via the signup page.

## 📊 Sample Data

The app comes with pre-loaded sample data:
- 2 sample procurements
- 2 sample sales
- 2 sample credit sales
- Analytics data

All data is stored in browser localStorage and persists across sessions.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 💡 Tips

- All data is stored locally in your browser
- Clear browser data to reset the application
- Different roles see different dashboard views
- Stock levels update automatically when you add sales

## 🐛 Troubleshooting

**Port already in use?**
- Vite will automatically use the next available port
- Check the terminal for the actual port number

**Module not found errors?**
- Run `npm install` again
- Delete `node_modules` and `package-lock.json`, then run `npm install`

**Data not persisting?**
- Check browser localStorage is enabled
- Try a different browser

---

Happy coding! 🎉

