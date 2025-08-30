# 🌾 RuralAccess – Mini Full-Stack Web App

A simple **full-stack web application** prototype that helps **rural communities** easily find and access essential products and services.  

This project was built as part of an assignment to demonstrate **React frontend + Node/Express backend + MongoDB database** integration.  

---

## 🚀 Features

### 🖥️ Frontend (React)
- **Responsive Homepage** with:
  - Navbar (Home, Services, Products, Contact, Login, Register)
  - **Our Services** section (list of services with icons/images)
  - **Available Products** section (products with price & image)
  - **News & Updates** section (dummy static headlines)
  - **Contact Us Footer** (address, helpline number, contact form)
- **Auth pages**: Login & Register forms
- **User Dashboard**:
  - Welcome message with username
  - User info display
  - Bookings section (if added later)
- **Search bar** for products (filter by name)
- Clean and simple design (using **CSS + Tailwind classes**)

### ⚙️ Backend (Node.js + Express)
- REST API Endpoints:
  - `GET /services` → list of services
  - `GET /products` → list of products
  - `GET /news` → dummy news headlines
  - `POST /register` → user registration
  - `POST /login` → user login (JWT authentication)
  - `POST /contact` → save contact form submission
- Middleware: `cors`, `express.json`, `morgan` for logging

### 🗄️ Database (MongoDB Atlas)
- Users collection → store registered users
- Products & Services collections → demo data
- Contacts collection → form submissions

---

## 🛠️ Tech Stack
**Frontend**: React.js (JavaScript, Tailwind CSS)  
**Backend**: Node.js + Express.js  
**Database**: MongoDB (Atlas cloud)  
**Deployment**:  
- Frontend → Vercel / Netlify  
- Backend → Render / Railway  
- Database → MongoDB Atlas  

---

## 📂 Project Structure
```
ruralaccess/
│── client/              # React frontend
│   ├── src/
│   │   ├── components/  # Navbar, ContactForm, ServiceCard, ProductCard
│   │   ├── pages/       # Home, Services, Products, Contact, Login, Register, Dashboard
│   │   └── App.js
│   └── package.json
│
│── server/              # Node.js backend
│   ├── src/
│   │   ├── index.js     # Express server
│   │   ├── models/      # Mongoose schemas (User, Product, Service, Contact)
│   │   ├── routes/      # API endpoints
│   └── package.json
│
└── README.md
```

---

## ⚡ Getting Started (Local Setup)

### 1️⃣ Clone Repo
```bash
git clone https://github.com/your-username/ruralaccess.git
cd ruralaccess
```

### 2️⃣ Setup Backend
```bash
cd server
npm install
```
Create `.env` file in `server/`:
```env
MONGO_URI=your-mongodb-atlas-uri
JWT_SECRET=your-secret-key
PORT=5000
```
Start backend:
```bash
npm start
```
API runs on → `http://localhost:5000`

### 3️⃣ Setup Frontend
```bash
cd client
npm install
```
Create `.env` file in `client/`:
```env
REACT_APP_API=http://localhost:5000
```
Start frontend:
```bash
npm start
```
Frontend runs on → `http://localhost:3000`

---

## 🌍 Deployment Guide
1. **Backend** → Deploy on Render / Railway  
   - Connect GitHub repo  
   - Root dir: `/server`  
   - Start command: `node src/index.js`  
   - Add env vars (`MONGO_URI`, `JWT_SECRET`)  

2. **Frontend** → Deploy on Vercel / Netlify  
   - Root dir: `/client`  
   - Build command: `npm run build`  
   - Output: `build/`  
   - Env var: `REACT_APP_API=https://your-backend.onrender.com`

3. **Database** → Host free on MongoDB Atlas  

---

## 👤 Demo Login (Optional)
You can create a test account:
```
Email: test@example.com
Password: 123456
```
Or register a new one on `/register`.

---

## 📜 Assignment Coverage
✅ Homepage UI with navbar, services, products, news, and contact form  
✅ Responsive design  
✅ Signup/Login with backend + database  
✅ User Dashboard with profile + bookings placeholder  
✅ REST API endpoints  
✅ MongoDB storage  
✅ Ready for deployment  

---

## 🙌 Author
**Swapnil Thorat**  
_Assignment Project for Rural Access Web App_
