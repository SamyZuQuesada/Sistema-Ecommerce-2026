
import { ProductCard } from "../components/ProductCard";
import { ProductTable } from "../components/ProductTablet";
import type { ProductType } from "../types/productType";

const products: ProductType[] = [
  {
    id: 1,
    name: "Camisa básica",
    description: "Producto de ejemplo para catálogo.",
    price: 10000,
    imagenUrl: "/src/assets/logo-placeholder.svg",
    stock: 8,
  },
  {
    id: 2,
    name: "Pantalón casual",
    description: "Producto de ejemplo para catálogo.",
    price: 15000,
    imagenUrl: "/src/assets/logo-placeholder.svg",
    stock: 4,
  },
];

export function ProductsPage() {
  return (
    <main>
      <section>
        <h1>Productos</h1>
      </section>

      <section>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>

      <section>
        <ProductTable products={products} />
      </section>
    </main>
  );
}