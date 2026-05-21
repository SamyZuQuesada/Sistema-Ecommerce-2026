import { Link } from "react-router-dom";
import { ProductForm } from "../components/ProductForm";
import { Button } from "../components/Button";
import { ROUTES } from "../constants/routesConstants";

export function CheckoutPage() {
  return (
    <main>
      <h1>Finalizar compra</h1>

      <ProductForm />

      <Link to={ROUTES.orders}>
        <Button>Confirmar pedido</Button>
      </Link>
    </main>
  );
}