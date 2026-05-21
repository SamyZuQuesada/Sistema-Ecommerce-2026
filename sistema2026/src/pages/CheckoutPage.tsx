    import { ProductForm } from "../components/ProductForm";
import { Button } from "../components/Button";
import type { UserType } from "../types/userType";

const customer: UserType = {
  id: 1,
  name: "Cliente de ejemplo",
  email: "cliente@correo.com",
  direccion: "Dirección de ejemplo",
  telefono: 88888888,
};

export function CheckoutPage() {
  return (
    <main>
      <section>
        <h1>Finalizar compra</h1>
      </section>

      <section>
        <article>
          <h2>Cliente</h2>
          <p>{customer.name}</p>
          <p>{customer.email}</p>
          <p>{customer.direccion}</p>
        </article>
      </section>

      <section>
        <ProductForm />
        <Button>Confirmar pedido</Button>
      </section>
    </main>
  );
}