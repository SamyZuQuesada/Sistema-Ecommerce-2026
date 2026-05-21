import { Button } from "./Button";

export function ProductForm() {
  return (
    <form>
      <label>
        Nombre del producto
        <input type="text" placeholder="Ejemplo: Camisa" />
      </label>

      <label>
        Precio
        <input type="number" placeholder="Ejemplo: 10000" />
      </label>

      <Button type="submit">Guardar producto</Button>
    </form>
  );
}