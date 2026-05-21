
import { Button } from "../components/Button";
import type { CartItemType } from "../types/cartItemType";

const cartItems: CartItemType[] = [
  {
    price: 10000,
    quantity: 1,
    product: {
      id: 1,
      name: "Camisa básica",
      description: "Producto agregado al carrito.",
      price: 10000,
      imagenUrl: "/src/assets/logo-placeholder.svg",
      stock: 8,
    },
  },
];

export function CartPage() {
  return (
    <main>
      <section>
        <h1>Carrito</h1>
      </section>

      <section>
        {cartItems.map((item) => (
          <article key={item.product.id}>
            <h3>{item.product.name}</h3>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio: {item.price}</p>
          </article>
        ))}
      </section>

      <section>
        <Button>Continuar compra</Button>
      </section>
    </main>
  );
}