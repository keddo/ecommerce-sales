import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import AddProduct from './pages/AddProduct';
import SingleProduct from './pages/SingleProduct';
import EditProduct from './pages/EditProduct';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path='/edit/:id' element={<EditProduct/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
