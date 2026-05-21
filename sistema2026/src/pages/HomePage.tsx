import { Button } from "../components/Button";
import { ProductCard } from "../components/ProductCard";
import type { ProductType } from "../types/productType";

const featuredProduct: ProductType = {
  id: 1,
  name: "Producto destacado",
  description: "Producto principal del catálogo.",
  price: 10000,
  imagenUrl: "/src/assets/logo-placeholder.svg",
  stock: 5,
};

export function HomePage() {
  return (
    <main>
      <section>
        <h1>E-commerce</h1>

        <Button>Ver productos</Button>
        <Button>Ver carrito</Button>
      </section>

      <section>
        <h2>Producto destacado</h2>

        <ProductCard product={featuredProduct} />
      </section>
    </main>
  );
}