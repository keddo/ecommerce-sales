import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useProductStore from '../store/productStore';

export default function AddProduct() {
  const [form, setForm] = useState({ name: '', price: '', description: '', image: '' });
  const addProduct = useProductStore((state) => state.addProduct);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProduct(form);
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border px-4 py-2 rounded"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="w-full border px-4 py-2 rounded"
          placeholder="Price"
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <input
          className="w-full border px-4 py-2 rounded"
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />
        <textarea
          className="w-full border px-4 py-2 rounded"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        ></textarea>
        <button 
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700" 
        type="submit"
        onClick={handleSubmit}
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
