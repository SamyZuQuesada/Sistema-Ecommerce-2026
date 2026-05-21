import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { ROUTES } from "../constants/routesConstants";

export function OrdersPage() {
  return (
    <main>
      <h1>Órdenes</h1>

      <Link to={ROUTES.home}>
        <Button>Volver al inicio</Button>
      </Link>
    </main>
  );
}