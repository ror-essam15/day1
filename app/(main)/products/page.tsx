import { getDataSSR } from "@/app/components/ui/Utlis";
import ProductList from "@/app/components/products/ProductList";

export default async function ProductsPage() {
  const data = await getDataSSR("https://dummyjson.com/products");
  return <ProductList products={data.products} />;
}
