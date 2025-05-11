import { create } from 'zustand';
import axios from 'axios';

const API_URL = 'http://localhost:5001/api/products';

const useProductStore = create((set) => ({
  products: [],
  selectedProduct: null,
  fetchProducts: async () => {
    set({ loading: true });
    try {
      const res = await axios.get(API_URL);
      set({ products: res.data.products, loading: false });
    } catch (err) {
      console.error(err);
      set({ loading: false });
    }
  },
  getProduct: async (id) => {
    const res = await axios.get(`${API_URL}/${id}`);
    console.log(res.data);
    set({ selectedProduct: res.data.data });
  },
  addProduct: async (product) => {
    const res = await axios.post(API_URL, product);
    set((state) => ({ products: [...state.products, res.data] }));
  },
  updateProduct: async (id, updatedData) => {
    try {
      await axios.put(`${API_URL}/${id}`, updatedData);
      const res = await axios.get(API_URL); // Fetch all products again
      set({ products: res.data.data }); // Update local store
    } catch (err) {
      console.error("Error updating product:", err);
    }
  },
  deleteProduct: async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    set((state) => ({
      products: state.products.filter((p) => p._id !== id),
    }));
  },
}));
export default useProductStore;
