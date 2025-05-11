# 🛒 Ecommerce Sales Platform

A full-featured multi-platform ecommerce solution that includes a backend API, a responsive web frontend, and a mobile shopping app — all within one project directory.

## 📦 Project Structure

```
ecommerce-sales/
├── backend/     # Node.js/Express REST API for the ecommerce system
├── frontend/    # Web app for customers and admins
├── mobile/      # Mobile app for iOS and Android (React Native or similar)
└── README.md    # Project overview and documentation
```

## ⚙️ Tech Stack

| Layer    | Technology                                   |
| -------- | -------------------------------------------- |
| Backend  | Node.js, Express, MongoDB or PostgreSQL, JWT |
| Frontend | React.js, Axios, TailwindCSS                 |
| Mobile   | React Native (or Flutter)                    |
| Auth     | JWT-based Authentication                     |
| API      | RESTful                                      |

## ✨ Key Features

### ✅ Backend API

- User registration and login with JWT
- Role-based access (Admin/User)
- Product CRUD operations
- Shopping cart and order handling
- Secure REST API endpoints

### 💻 Web Frontend

- Responsive UI for browsing and buying products
- User authentication and profile management
- Product listing, filtering, and search
- Shopping cart and order history
- Admin dashboard (optional)

### 📱 Mobile App

- Seamless shopping on mobile
- Secure login and checkout
- Product listing and cart features
- Push notification support (optional)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/keddo/ecommerce-sales.git
cd ecommerce-sales
```

---

### 2. Setup Backend

```bash
cd backend
npm install
cp .env.example .env   # fill in environment variables
npm run dev
```

---

### 3. Setup Frontend

```bash
cd ../frontend
npm install
cp .env.example .env
npm run dev
```

---

### 4. Setup Mobile App

```bash
cd ../mobile
npm install
# Use expo start or react-native run-android/run-ios
npm start
```

> Ensure that backend API URLs are correctly set in both frontend and mobile `.env` files.

## 🛠 Environment Variables

Each part of the project has its own `.env` file to configure settings like:

- API base URLs
- Database connection strings
- JWT secrets
- Stripe or payment gateway keys (if integrated)

## 🧪 Testing

- Backend tests can be added using Jest or Mocha
- Frontend tests using React Testing Library
- Mobile tests using Detox or Jest

## 📄 License

This project is open-sourced under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to fork the project and submit a pull request.

---

**Made with ❤️ by [Kedir, Yordanos, Mule]**
