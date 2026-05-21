import { Link } from "react-router-dom";
import { Button } from "../components/Button";

export function HomePage() {
  return (
    <main>
      <h1>E-commerce</h1>

      <Link to="/products">
        <Button>Ver productos</Button>
      </Link>

      <Link to="/cart">
        <Button>Ver carrito</Button>
      </Link>
    </main>
  );
}