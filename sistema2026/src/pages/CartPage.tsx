import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { ROUTES } from "../constants/routesConstants";

export function CartPage() {
  return (
    <main>
      <h1>Carrito</h1>

      <Link to={ROUTES.checkout}>
        <Button>Continuar compra</Button>
      </Link>
    </main>
  );
}