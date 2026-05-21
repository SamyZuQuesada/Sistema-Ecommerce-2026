# Estándares de Nomenclatura - Sistema Ecommerce 2026

## Tabla de Contenidos
1. [Archivos y Carpetas](#archivos-y-carpetas)
2. [Componentes React](#componentes-react)
3. [Hooks Personalizados](#hooks-personalizados)
4. [Tipos e Interfaces](#tipos-e-interfaces)
5. [Funciones de Utilidad](#funciones-de-utilidad)
6. [Constantes](#constantes)
7. [Servicios / API](#servicios--api)
8. [Stores de Estado Global](#stores-de-estado-global)

---

## Archivos y Carpetas

### Regla General
- **Carpetas**: `kebab-case` (minúsculas con guiones)
- **Archivos TypeScript**: `PascalCase.tsx` (componentes), `camelCase.ts` (utilidades/hooks)
- **Archivos de estilos**: `ComponentName.css` o colocalizado en carpeta

### Estructura Base
```
src/
├── components/          # Componentes reutilizables
├── pages/              # Páginas/vistas principales
├── layout/             # Layouts (Navbar, Sidebar, Footer)
├── forms/              # Componentes de formulario
├── tables/             # Componentes de tabla
├── hooks/              # Hooks personalizados
├── services/           # Clientes HTTP y endpoints
├── store/              # Estado global (Zustand)
├── types/              # Tipos e interfaces TypeScript
├── utils/              # Funciones auxiliares
├── constants/          # Valores constantes
├── config/             # Configuración global
├── router/             # Definición de rutas
└── assets/             # Recursos estáticos
```

---

## Componentes React

### Nomenclatura
- **Formato**: `PascalCase` 
- **Extensión**: `.tsx`
- **Estructura**: Cada componente en su propia carpeta o archivo

### Ejemplos
```
Button.tsx
ProductCard.tsx
CheckoutForm.tsx
button.tsx
productcard.tsx
```

### Archivo Index
- Usa `Index.tsx` solo como componente principal de **shared components**
- Para componentes de página, nombra explícitamente: `HomePage.tsx`, no `pages/home/Index.tsx`

---

## Hooks Personalizados

### Nomenclatura
- **Formato**: `camelCase`
- **Prefijo obligatorio**: `use`
- **Extensión**: `.ts`

### Ejemplos
```
useProductForm.ts
useCartState.ts
useFetchOrders.ts
ProductForm.ts
cartState.ts
```

### Firma Mínima
```typescript
// useProductForm.ts
export const useProductForm = () => {
  // Lógica del hook
  return { /* exports */ };
};
```

---

## Tipos e Interfaces

### Nomenclatura
- **Formato**: `PascalCase`
- **Extensión**: `.ts`
- **Prefijo (opcional)**: `I` para interfaces antiguas, NO recomendado en nuevos proyectos

### Estructura de Carpeta `types/`
Cada dominio en su archivo:
```
types/
├── productType.ts      # Tipos relacionados con productos
├── orderType.ts        # Tipos relacionados con órdenes
├── cartType.ts         # Tipos de carrito
└── userType.ts         # Tipos de usuario
```

### Ejemplos
```typescript
// productType.ts
export type Product = {
  id: string;
  name: string;
  price: number;
};

export interface ProductResponse {
  data: Product[];
  status: number;
}
```

---

## Funciones de Utilidad

### Nomenclatura
- **Formato**: `camelCase`
- **Extensión**: `.ts`
- **Ubicación**: `utils/` o junto al módulo que la usa

### Archivos
- Agrupar por funcionalidad: `formatCurrency.ts`, `calculateCartTotal.ts`
- NO crear archivos `utils.ts` genéricos

### Ejemplos
```
formatCurrency.ts
calculateTotal.ts
validateEmail.ts
helpers.ts
utils.ts
```

---

## Constantes

### Nomenclatura
- **Formato**: `UPPER_SNAKE_CASE`
- **Extensión**: `.ts`
- **Ubicación**: `constants/` agrupadas por tema

### Estructura
```
constants/
├── apiConstants.ts     # URLs, timeouts de API
├── validationConstants.ts  # Reglas de validación
├── messageConstants.ts # Textos y mensajes
└── routeConstants.ts   # Rutas de la aplicación
```

### Ejemplos
```typescript
// apiConstants.ts
export const API_BASE_URL = 'https://api.example.com';
export const API_TIMEOUT = 30000;

// routeConstants.ts
export const ROUTE_HOME = '/';
export const ROUTE_PRODUCTS = '/products';
export const ROUTE_CHECKOUT = '/checkout';
```

---

## Servicios / API

### Nomenclatura
- **Archivo**: `domainService.ts` (ej: `productService.ts`)
- **Extensión**: `.ts`
- **Ubicación**: `services/`

### Estructura
```typescript
// productService.ts
import axios from 'axios';

export const fetchProducts = async () => {
  const { data } = await axios.get('/products');
  return data;
};

export const fetchProductById = async (id: string) => {
  const { data } = await axios.get(`/products/${id}`);
  return data;
};
```

### Funciones
- Nombrar según la acción: `fetch*`, `create*`, `update*`, `delete*`

---

## Stores de Estado Global

### Nomenclatura
- **Archivo**: `domainStore.ts` (ej: `cartStore.ts`)
- **Extensión**: `.ts`
- **Ubicación**: `store/`
- **Hook exportado**: `use{Domain}Store`

### Estructura
```typescript
// cartStore.ts
import { create } from 'zustand';

type CartState = {
  items: CartItem[];
  total: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
};

export const useCartStore = create<CartState>((set) => ({
  items: [],
  total: 0,
  addItem: (item) => set(state => ({
    items: [...state.items, item]
  })),
  removeItem: (id) => set(state => ({
    items: state.items.filter(item => item.id !== id)
  }))
}));
```

---

## Archivos de Configuración

### config/
```
config/
├── axios.ts           # Instancia de axios configurada
├── reactQuery.ts      # QueryClient configuration
├── env.ts            # Variables de entorno
└── constants.ts      # Configuración global
```

---

## Resumen de Sufijos

| Elemento | Sufijo | Ejemplo |
|----------|--------|---------|
| Componente React | `.tsx` | `ProductCard.tsx` |
| Hook personalizado | `use*` | `useCart.ts` |
| Tipo/Interfaz | `Type` o nada | `productType.ts` |
| Servicio | `Service` | `productService.ts` |
| Store Zustand | `Store` | `cartStore.ts` |
| Constante | `UPPER_SNAKE_CASE` | `API_BASE_URL` |
| Función utilidad | camelCase | `formatCurrency.ts` |

---

## Reglas Generales

**SIEMPRE**:
- Usar TypeScript con tipos explícitos
- Agrupar archivos relacionados en carpetas
- Nombrar archivos según su contenido principal
- Documentar tipos complejos

**NUNCA**:
- Archivos genéricos como `utils.ts`, `helpers.ts`, `index.ts` (excepto carpeta shared)
- Mezclar PascalCase y camelCase inconsistentemente
- Dejar carpetas vacías
- Exportar componentes sin tipado

---

## Ejemplo Completo de Estructura

```
src/
├── components/
│   ├── Button.tsx
│   ├── ProductCard.tsx
│   └── Index.tsx (exports todos los componentes)
├── forms/
│   ├── ProductForm.tsx
│   └── CheckoutForm.tsx
├── tables/
│   └── OrdersTable.tsx
├── pages/
│   ├── HomePage.tsx
│   ├── ProductsPage.tsx
│   └── CheckoutPage.tsx
├── hooks/
│   ├── useProducts.ts
│   └── useCart.ts
├── services/
│   ├── productService.ts
│   ├── orderService.ts
│   └── cartService.ts
├── store/
│   ├── cartStore.ts
│   └── userStore.ts
├── types/
│   ├── productType.ts
│   ├── orderType.ts
│   └── userType.ts
├── utils/
│   ├── formatCurrency.ts
│   └── calculateTotal.ts
├── constants/
│   ├── apiConstants.ts
│   └── routeConstants.ts
├── config/
│   ├── axios.ts
│   └── env.ts
└── router/
    └── routes.tsx
```

---