import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useProductStore from '../store/productStore';

export default function SingleProduct() {
  const { id } = useParams();
  const { selectedProduct, getProduct } = useProductStore();

  useEffect(() => {
    getProduct(id);
  }, [id]);

  if (!selectedProduct) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto p-4 mt-10">
      <h2 className="text-3xl font-bold mb-2">{selectedProduct.name}</h2>
      <img
        src={selectedProduct.image}
        alt={selectedProduct.name}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <p className="text-xl font-semibold text-gray-800 mb-2">${selectedProduct.price}</p>
      <p className="text-gray-600">{selectedProduct.description}</p>
    </div>
  );
}
