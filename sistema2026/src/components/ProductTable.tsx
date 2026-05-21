import type { ProductType } from "../types/productType";

interface ProductTableProps {
  products: ProductType[];
}

export function ProductTable({ products }: ProductTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Precio</th>
        </tr>
      </thead>

      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}