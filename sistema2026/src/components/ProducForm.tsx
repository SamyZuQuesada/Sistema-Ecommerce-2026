import { Button } from "./Button";
import { Input } from "./Index";

export function ProductForm() {
  return (
    <form>
      <Input label="Nombre del producto" placeholder="Ejemplo: Camisa" />
      <Input label="Precio" type="number" placeholder="Ejemplo: 10000" />

      <Button type="submit">Guardar producto</Button>
    </form>
  );
}