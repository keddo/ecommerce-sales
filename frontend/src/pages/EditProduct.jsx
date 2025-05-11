import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useProductStore from "../store/productStore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { selectedProduct, getProduct, updateProduct } = useProductStore();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      await getProduct(id);
      if (selectedProduct) {
        setFormData(selectedProduct);
      } else {
        toast.error("Product not found");
        navigate("/");
      }
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateProduct(id, formData);
    toast.success("Product updated successfully!");
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Edit Product</h2>
      <form className="space-y-4" onSubmit={handleUpdate}>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
         type="submit"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;