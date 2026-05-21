import { Link } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { ProductTable } from "../components/ProductTable";
import { ROUTES } from "../constants/routesConstants";
import type { ProductType } from "../types/productType";

const products: ProductType[] = [
  {
    id: 1,
    name: "Camisa básica",
    description: "Producto de ejemplo",
    price: 10000,
    imagenUrl: "/src/assets/logo-placeholder.svg",
    stock: 8,
  },
];

export function ProductsPage() {
  return (
    <main>
      <h1>Productos</h1>

      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

      <ProductTable products={products} />

      <Link to={ROUTES.cart}>Ir al carrito</Link>
    </main>
  );
}