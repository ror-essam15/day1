import React from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

export default async function ProductDetails(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;

  const res = await fetch(`https://dummyjson.com/products/${id}`, { cache: "no-store" });

  if (!res.ok) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-2xl font-semibold text-red-600">Product not found</h1>
      </div>
    );
  }

  const product: Product = await res.json();

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">{product.title}</h1>

        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-64 object-cover rounded-lg mb-6 shadow-sm"
        />

        <p className="text-gray-600 text-lg leading-relaxed mb-4">{product.description}</p>

        <h3 className="text-2xl font-semibold text-blue-600 mb-6">${product.price}</h3>

        <a
          href="/products"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
        >
          ← Back to Products
        </a>
      </div>
    </div>
  );
}
