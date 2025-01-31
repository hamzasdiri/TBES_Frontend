"use client";

import { useRouter } from 'next/navigation';

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
}

const ProductCard: React.FC<{ product: Product; categoryId: string }> = ({ product, categoryId }) => {
  const router = useRouter();

  return (
    <div
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
      onClick={() => router.push(`/categories/${categoryId}/products/${product.id}`)}
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded-t-lg mb-4"
      />
      <h2 className="text-2xl font-semibold text-gray-800">{product.title}</h2>
      <p className="text-lg text-gray-600 mt-2">{product.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-xl font-bold text-indigo-600">${product.price}</span>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
