"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Product{
    id:number;
    title:string;
    price:number;
    thumbnail:string;
}

export default function Products() {
const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

 useEffect(()=>{
const getProducts =async ()=> {
    try{
           const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
    }
    catch(err){
            console.error("Error fetching products:", err);
    }
    finally{
          setLoading(false);
    }
};  getProducts();
},[]);

 if (loading)
      return (
      <div className="text-center py-10 text-lg font-semibold text-gray-600">
        Loading products...
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-lg font-semibold mt-3">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>

            <Link
              href={`/products/${product.id}`}
              className="inline-block mt-3 text-blue-600 font-medium hover:underline"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
