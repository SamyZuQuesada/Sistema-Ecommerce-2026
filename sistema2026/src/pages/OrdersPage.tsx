import type { OrderType } from "../types/orderType";

const orders: OrderType[] = [
  {
    id: 1,
    customerName: "Cliente de ejemplo",
    total: 10000,
    status: "PENDING",
    createdAt: "2026-05-20",
  },
  {
    id: 2,
    customerName: "Cliente de ejemplo",
    total: 15000,
    status: "IN_PROGRESS",
    createdAt: "2026-05-21",
  },
];

export function OrdersPage() {
  return (
    <main>
      <section>
        <h1>Órdenes</h1>
      </section>

      <section>
        {orders.map((order) => (
          <article key={order.id}>
            <h3>Orden #{order.id}</h3>
            <p>Cliente: {order.customerName}</p>
            <p>Total: {order.total}</p>
            <p>Estado: {order.status}</p>
            <p>Fecha: {order.createdAt}</p>
          </article>
        ))}
      </section>
    </main>
  );
}