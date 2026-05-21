# Sistema Ecommerce - Tienda de Ropa

Plantilla arquitectónica profesional para una aplicación de ecommerce construida con **React 19**, **TypeScript** y **Vite**, siguiendo una arquitectura **Layer-Based** clara y escalable.

Este repositorio es una **plantilla de base profesional** para desarrollar proyectos frontend, demostrando una arquitectura bien estructurada, no una aplicación funcional completa.

**Universidad:** Universidad Nacional de Costa Rica  
**Sede:** Regional Chorotega, Campus Nicoya  
**Curso:** Programación IV  
**Profesor:** Lawrence Fowks Peña  
**Año:** 2026

---

## Tabla de Contenidos

- [Quick Start](#quick-start)
- [Arquitectura Layer-Based](#arquitectura-layer-based)
- [Estructura de Carpetas](#estructura-de-carpetas)
- [Estándares](#estándares)
- [Stack de Tecnologías](#stack-de-tecnologías)
- [Guía de Desarrollo](#guía-de-desarrollo)

---

## uick Start

### Requisitos
- Node.js 18+
- npm o pnpm

### Instalación

```bash
# Clonar el repositorio
git clone <repo>
cd sistema2026

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Lint del código
npm run lint
```

El servidor estará disponible en `http://localhost:5173`

---

## Arquitectura Layer-Based

La aplicación utiliza una **Arquitectura Layer-Based (Type-Based)** que organiza el código según su responsabilidad técnica:

-  **Organización por tipo**: Componentes, servicios, hooks, tipos, etc.
- **Claridad inmediata**: Todos saben dónde buscar cada cosa
- **Fácil onboarding**: Nuevos desarrolladores se integran rápidamente
- **Escalable**: Crece sin refactorización mayor
- **Mantenible**: Cambios localizados y predecibles

Para detalles completos de la arquitectura, ver [ARQUITECTURA.md](./ARQUITECTURA.md)

---

## Estructura de Carpetas

```
src/
├── assets/                      # Recursos estáticos (imágenes, iconos, fuentes)
│
├── components/                  # Componentes reutilizables
│   ├── Button.tsx
│   ├── ProductCard.tsx
│   ├── ProductForm.tsx
│   ├── ProductTable.tsx
│   └── Index.tsx
│
├── pages/                       # Páginas/vistas principales
│   ├── HomePage.tsx
│   ├── ProductsPage.tsx
│   ├── CartPage.tsx
│   ├── CheckoutPage.tsx
│   └── OrdersPage.tsx
│
├── hooks/                       # Hooks personalizados
│   ├── useProducts.ts
│   ├── useCart.ts
│   ├── useOrders.ts
│   └── ...
│
├── services/                    # Lógica API y comunicación HTTP
│   ├── productService.ts
│   ├── cartService.ts
│   ├── orderService.ts
│   └── ...
│
├── store/                       # Estado global (Zustand)
│   ├── cartStore.ts
│   ├── productStore.ts
│   └── ...
│
├── routes/                      # Configuración de rutas
│   ├── routes.tsx               # Definición de rutas
│   └── ...
│
├── layout/                      # Layouts principales
│   ├── MainLayout.tsx
│   ├── AuthLayout.tsx
│   └── DashboardLayout.tsx
│
├── types/                       # Tipos e interfaces TypeScript
│   ├── productType.ts
│   ├── orderType.ts
│   ├── cartItemType.ts
│   └── userType.ts
│
├── utils/                       # Funciones utilitarias reutilizables
│   ├── formatCurrency.ts
│   ├── calculateCartTotal.ts
│   ├── formatDate.ts
│   └── ...
│
├── constants/                   # Constantes de la aplicación
│   ├── keyConstants.ts
│   ├── routesConstants.ts
│   └── ...
│
├── config/                      # Configuración global
│   ├── axios.ts                 # Cliente HTTP
│   ├── env.ts                   # Variables de entorno
│   ├── reactQuery.ts            # QueryClient
│   └── ...
│
├── shared/                      # Componentes compartidos avanzados
│   ├── forms/                   # Componentes de formulario
│   └── tables/                  # Componentes de tabla
│
├── App.tsx                      # Componente raíz
├── main.tsx                     # Punto de entrada
└── styles/                      # Estilos globales
```

### Organización por Responsabilidad

| Carpeta | Responsabilidad |
|---------|-----------------|
| **assets/** | Imágenes, íconos, fuentes |
| **components/** | Componentes UI reutilizables |
| **pages/** | Vistas principales de la aplicación |
| **hooks/** | Lógica de componentes reutilizable |
| **services/** | Llamadas a APIs y servicios externos |
| **store/** | Estado global (Zustand) |
| **routes/** | Configuración y definición de rutas |
| **layout/** | Estructuras base (navbar, sidebar) |
| **types/** | Tipos e interfaces TypeScript |
| **utils/** | Funciones auxiliares |
| **constants/** | Valores fijos de la aplicación |
| **config/** | Configuración global |
| **shared/** | Componentes complejos reutilizables |

---

## Estándares

La nomenclatura y estructura están estandarizados para mantener consistencia en todo el proyecto.

Ver [CONVENTIONS.md](./CONVENTIONS.md) para:

- Nomenclatura de archivos y carpetas
-  Convenciones de componentes React
- Naming de hooks, tipos, servicios, stores
- Estructura de archivos
- Ejemplos completos

**Resumen rápido:**

| Elemento | Estándar | Ejemplo |
|----------|----------|---------|
| Componente | `PascalCase.tsx` | `ProductCard.tsx` |
| Hook | `useXxx.ts` | `useProducts.ts` |
| Tipo | `xxxType.ts` | `productType.ts` |
| Servicio | `xxxService.ts` | `productService.ts` |
| Store | `xxxStore.ts` | `cartStore.ts` |
| Constante | `UPPER_SNAKE_CASE` | `API_BASE_URL` |
| Carpeta | `lowercase` | `components/`, `hooks/` |

---

## Stack de Tecnologías

### Tecnologías Obligatorias

| Tecnología | Versión | Propósito |
|-----------|---------|----------|
| **React** | ^19.2 | Framework UI principal |
| **TypeScript** | ^6.0 | Tipado estático |
| **Vite** | ^8.0 | Bundler y dev server |

### Librerías Principales

| Librería | Categoría | Propósito |
|----------|-----------|----------|
| **React Router DOM** | Enrutamiento | Manejo de rutas y navegación |
| **React Hook Form** | Formularios | Manejo eficiente de formularios |
| **Zod** | Validación | Validación type-safe de esquemas |
| **TanStack React Query** | Data Fetching | Manejo de caché y sincronización |
| **Zustand** | Estado Global | Gestión de estado simple y ligera |
| **Axios** | HTTP Client | Cliente HTTP configurado con interceptores |
| **Headless UI** | Componentes | Componentes accesibles sin estilos |
| **TanStack React Table** | Tablas | Componentes de tabla potentes |

---

## Guía de Desarrollo

### Crear un Componente

```typescript
// src/components/Button.tsx
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button = ({ children, onClick, variant = 'primary' }: ButtonProps) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};
```

### Crear un Hook

```typescript
// src/hooks/useProducts.ts
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../services/productService';

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
};
```

### Crear un Servicio

```typescript
// src/services/productService.ts
import axios from 'axios';
import { Product } from '../types/productType';

export const fetchProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get('/products');
  return data;
};

export const fetchProductById = async (id: string): Promise<Product> => {
  const { data } = await axios.get(`/products/${id}`);
  return data;
};
```

### Crear un Store (Zustand)

```typescript
// src/store/cartStore.ts
import { create } from 'zustand';
import { CartItem } from '../types/cartItemType';

interface CartState {
  items: CartItem[];
  total: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  total: 0,
  addItem: (item) => set((state) => ({
    items: [...state.items, item],
  })),
  removeItem: (id) => set((state) => ({
    items: state.items.filter((item) => item.id !== id),
  })),
}));
```

### Crear un Tipo

```typescript
// src/types/productType.ts
export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
};

export interface ProductFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
}
```

---

## Comandos Disponibles

```bash
# Desarrollo
npm run dev         # Iniciar servidor de desarrollo

# Build
npm run build       # Build para producción
npm run preview     # Vista previa de producción local

# Lint
npm run lint        # Ejecutar ESLint
```

---

## Documentación Adicional

- [ARQUITECTURA.md](./ARQUITECTURA.md) - Análisis de arquitecturas y justificación de Layer-Based
- [CONVENTIONS.md](./CONVENTIONS.md) - Estándares de nomenclatura y estructura
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Vite Docs](https://vitejs.dev/)

---

##  Checklist de Cumplimiento

**Documentación:**
- [x] ARQUITECTURA.md - Análisis de 3 arquitecturas
- [x] CONVENTIONS.md - Estándares de nomenclatura
- [x] README.md mejorado

 **Stack Completo:**
- [x] React Router - Enrutamiento
- [x] React Hook Form - Formularios
- [x] Zod - Validación
- [x] TanStack Query - Data fetching
- [x] Zustand - Estado global
- [x] Axios - HTTP client
- [x] Headless UI - Componentes
- [x] TanStack React Table - Tablas

**Estructura:**
- [x] assets/ - Recursos estáticos
- [x] components/ - 5 componentes de ejemplo
- [x] pages/ - 5 páginas principales
- [x] hooks/ - 7 hooks personalizados
- [x] services/ - 3 servicios HTTP
- [x] store/ - 2 stores Zustand
- [x] routes/ - Rutas configuradas
- [x] layout/ - 3 layouts
- [x] types/ - 4 tipos de dominio
- [x] utils/ - 3 funciones utilitarias
- [x] constants/ - Constantes organizadas
- [x] config/ - Configuración global
- [x] shared/ - Forms y tables reutilizables

**Sin carpetas vacías** - Todas tienen archivos de ejemplo

---

## Equipo

- Aaron Solano Cordero
- Geison Chavarría Peréz
- David Mendéz Araya
- Sebastián Solis Duarte
- Samira Zuñiga Quesada

---

**Sistema Ecommerce - Tienda de Ropa**  
*Arquitectura Layer-Based | React 19 + TypeScript + Vite*  
---

## Estructura de Carpetas

```
src/
├── shared/                      # Código reutilizable entre features
│   ├── components/              # Botones, badges, loaders, etc.
│   ├── hooks/                   # useLocalStorage, useAsync, etc.
│   ├── utils/                   # formatCurrency, calculateTotal, etc.
│   ├── types/                   # Tipos compartidos
│   └── constants/               # Constantes globales
│
├── features/                    # Features independientes del dominio
│   ├── products/                # Feature de productos
│   │   ├── ui/                  # Componentes específicos
│   │   ├── hooks/               # Lógica local (useProduct, etc.)
│   │   ├── services/            # API calls (productService.ts)
│   │   ├── store/               # Estado global (productStore.ts)
│   │   └── types/               # Tipos de products
│   ├── cart/                    # Feature de carrito
│   ├── orders/                  # Feature de órdenes
│   └── auth/                    # Feature de autenticación
│
├── layout/                      # Layouts principales
│   ├── MainLayout.tsx
│   ├── AuthLayout.tsx
│   └── DashboardLayout.tsx
│
├── pages/                       # Páginas/vistas principales
│   ├── HomePage.tsx
│   ├── ProductsPage.tsx
│   ├── CartPage.tsx
│   ├── CheckoutPage.tsx
│   └── OrdersPage.tsx
│
├── router/                      # Configuración de rutas
│   └── routes.tsx
│
├── config/                      # Configuración global
│   ├── axios.ts                 # Cliente HTTP
│   ├── env.ts                   # Variables de entorno
│   └── reactQuery.ts            # QueryClient
│
├── styles/                      # Estilos globales
├── App.tsx                      # Componente raíz
└── main.tsx                     # Punto de entrada
```

### Cómo Agregar una Nueva Feature

```bash
# Crear estructura básica
src/features/newfeature/
├── ui/
│   └── NewfeatureCard.tsx
├── hooks/
│   └── useNewfeature.ts
├── services/
│   └── newfeatureService.ts
├── store/
│   └── newfeatureStore.ts
└── types/
    └── newfeatureType.ts
```

---

## Estándares

La nomenclatura y estructura están estandarizados para mantener consistencia.

Ver [CONVENTIONS.md](./CONVENTIONS.md) para:

- Nomenclatura de archivos y carpetas
- Convenciones de componentes React
- Naming de hooks, tipos, servicios, stores
- Estructura de carpetas
- Ejemplos completos

**Resumen rápido:**

| Elemento | Estándar | Ejemplo |
|----------|----------|---------|
| Componente | `PascalCase.tsx` | `ProductCard.tsx` |
| Hook | `useXxx.ts` | `useProducts.ts` |
| Tipo | `xxxType.ts` | `productType.ts` |
| Servicio | `xxxService.ts` | `productService.ts` |
| Store | `xxxStore.ts` | `cartStore.ts` |
| Constante | `UPPER_SNAKE_CASE` | `API_BASE_URL` |
| Carpeta | `kebab-case` | `shared/`, `features/` |

---

## Stack de Tecnologías

### Tecnologías Obligatorias

| Tecnología | Versión | Propósito |
|-----------|---------|----------|
| **React** | ^19.2 | Framework UI principal |
| **TypeScript** | ^6.0 | Tipado estático |
| **Vite** | ^8.0 | Bundler y dev server |

### Librerías Principales

| Librería | Categoría | Propósito |
|----------|-----------|----------|
| **React Router DOM** | Enrutamiento | Manejo de rutas y navegación |
| **React Hook Form** | Formularios | Manejo eficiente de formularios |
| **Zod** | Validación | Validación type-safe de esquemas |
| **TanStack React Query** | Data Fetching | Manejo de caché y sincronización |
| **Zustand** | Estado Global | Gestión de estado simple y ligera |
| **Axios** | HTTP Client | Cliente HTTP configurado con interceptores |
| **Headless UI** | Componentes | Componentes accesibles sin estilos |
| **TanStack React Table** | Tablas | Componentes de tabla potentes |

Para justificación detallada de cada librería, ver [ARQUITECTURA.md](./ARQUITECTURA.md)

---

## Guía de Desarrollo

### Crear un Componente

```typescript
// src/shared/components/Button.tsx
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button = ({ children, onClick, variant = 'primary' }: ButtonProps) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};
```

### Crear un Hook

```typescript
// src/features/products/hooks/useProducts.ts
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../services/productService';

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
};
```

### Crear un Servicio

```typescript
// src/features/products/services/productService.ts
import axios from 'axios';
import { Product } from '../types/productType';

export const fetchProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get('/products');
  return data;
};

export const fetchProductById = async (id: string): Promise<Product> => {
  const { data } = await axios.get(`/products/${id}`);
  return data;
};
```

### Crear un Store (Zustand)

```typescript
// src/features/cart/store/cartStore.ts
import { create } from 'zustand';
import { CartItem } from '../types/cartType';

interface CartState {
  items: CartItem[];
  total: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  total: 0,
  addItem: (item) => set((state) => ({
    items: [...state.items, item],
  })),
  removeItem: (id) => set((state) => ({
    items: state.items.filter((item) => item.id !== id),
  })),
}));
```

### Crear un Formulario

```typescript
// src/features/products/ui/ProductForm.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { productSchema } from '../types/productType';

export const ProductForm = () => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(productSchema),
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register('name')} placeholder="Nombre" />
      <button type="submit">Guardar</button>
    </form>
  );
};
```

---

## Comandos Disponibles

```bash
# Desarrollo
npm run dev         # Iniciar servidor de desarrollo

# Build
npm run build       # Build para producción
npm run preview     # Vista previa de producción local

# Lint
npm run lint        # Ejecutar ESLint
```

---

## Documentación Adicional

- [ARQUITECTURA.md](./ARQUITECTURA.md) - Análisis de arquitecturas y justificación
- [CONVENTIONS.md](./CONVENTIONS.md) - Estándares de nomenclatura y estructura
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Vite Docs](https://vitejs.dev/)

---

## Próximos Pasos

1.  Leer [ARQUITECTURA.md](./ARQUITECTURA.md) para entender la estructura
2. Revisar [CONVENTIONS.md](./CONVENTIONS.md) para los estándares
3. Instalar dependencias: `npm install`
4. Iniciar desarrollo: `npm run dev`
5. Crear primera feature siguiendo la estructura

---

##  Contribuye

- Sigue los estándares en [CONVENTIONS.md](./CONVENTIONS.md)
- Crea features en `src/features/`
- Componentes compartidos en `src/shared/`
- Asegúrate que TypeScript no tenga errores

---

