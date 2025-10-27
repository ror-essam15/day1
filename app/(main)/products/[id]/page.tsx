import Image from "next/image";
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

async function getSingleProduct(id: string): Promise<Product> {
  const res = await fetch(`https://dummyjson.com/products/${id}`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Product not found");
  }

  return res.json();
}

async function getAllProducts(): Promise<Product[]> {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  const data = await res.json();
  console.log("Products fetched:", data);
  return data;
}

export async function generateStaticParams() {
  const products = await getAllProducts();


  if (!Array.isArray(products)) {
    console.error(" Expected an array but got:", products);
    return [];
  }

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductDetails(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const product = await getSingleProduct(id);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 bg-white shadow-lg rounded-xl p-10">
        <Image
       src={product.thumbnail}
          alt={product.title}
          width={400}
          height={400}
          className="rounded-lg object-contain"
        />
        <div>
          <h1 className="text-3xl font-semibold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-xl font-bold text-green-600 mb-4">${product.price}</p>
        </div>
      </div>
    </div>
  );
}
