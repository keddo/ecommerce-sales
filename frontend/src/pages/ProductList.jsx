import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useProductStore from "../store/productStore";

export default function ProductList() {
  const { products, fetchProducts, deleteProduct, loading } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);
  
  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (products.length === 0) return <p className="text-center mt-10">No products found.</p>;
  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <Link
        to="/add"
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded mb-6 hover:bg-blue-600"
      >
        + Add Product
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600 mb-2">${product.price}</p>
              <div className="flex justify-between items-center">
                <Link
                  to={`/product/${product._id}`}
                  className="text-blue-500 hover:underline"
                >
                  View
                </Link>
                <Link
                  to={`/edit/${product._id}`}
                  className="text-yellow-500 hover:underline mr-4"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteProduct(product._id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
