import type { ProductType } from "../types/productType";
import { Button } from "./Button";

interface ProductCardProps {
  product: ProductType;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div>
      <img src={product.imagenUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>

      <Button>Agregar al carrito</Button>
    </div>
  );
}