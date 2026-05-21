# Investigación de Arquitecturas Frontend - Sistema Tienda de Ropa

**Universidad Nacional de Costa Rica**  
**Sede Regional Chorotega, Campus Nicoya**  
**Curso:** Programación IV  
**Proyecto:** Sistema E-commerce "Tienda de Ropa"  
**Profesor:** Lawrence Fowks Peña

---

## Resumen Ejecutivo

Este documento presenta un análisis comparativo de tres enfoques de arquitectura frontend ampliamente documentados en la industria. Se examina cada arquitectura con sus ventajas y desventajas, culminando en la selección justificada de la **Arquitectura Layer-Based (Type-Based)** para el desarrollo del Sistema E-commerce.

---

## 1️- Arquitectura Layer-Based (Type-Based)

### Descripción del Patrón

La arquitectura Layer-Based, también conocida como Type-Based, organiza los archivos del proyecto según el tipo de responsabilidad técnica que cumplen dentro de la aplicación. Todos los componentes se almacenan en una carpeta "components", todos los hooks en "hooks", los servicios en "services", y así sucesivamente.

Este enfoque es uno de los más utilizados en proyectos pequeños y medianos debido a que resulta sencillo de comprender, mantener y escalar gradualmente.

### Ventajas

- ✓ **Fácil de entender** para desarrolladores principiantes
- ✓ **Organización sencilla y clara** - Cada tipo de archivo en su lugar
- ✓ **Rápida implementación inicial** - Estructura predecible
- ✓ **Ideal para proyectos medianos** - Escala bien hasta cierto punto
- ✓ **Facilita encontrar archivos por tipo** - Localización intuitiva
- ✓ **Buen onboarding** - Nuevos desarrolladores se adaptan rápidamente
- ✓ **Desarrollo ordenado** - Permite crecimiento gradual sin refactorización

### Desventajas

- ✗ Puede tener problemas en proyectos muy grandes (100+ componentes)
- ✗ Las carpetas pueden crecer demasiado y volverse caóticas
- ✗ Puede generar acoplamiento entre módulos si no se gestiona bien
- ✗ Difícil localizar toda la lógica relacionada a una funcionalidad específica
- ✗ Requiere disciplina en nomenclatura y organización

### Casos de Uso Ideales

- Aplicaciones pequeñas a medianas (ecommerce, MVPs, dashboards)
- Equipos de 2-10 desarrolladores
- Proyectos que requieren ciclos rápidos de desarrollo
- Sistemas educativos o académicos
- Proyectos iniciales que pueden evolucionar

---

## 2️-  Arquitectura Basada en Componentes (Component-Based)

### Descripción del Patrón

La arquitectura basada en componentes divide la aplicación en componentes independientes, reutilizables y encapsulados. Cada componente representa una parte específica de la interfaz (botones, formularios, tarjetas, tablas, modales) con su propia lógica, estructura y comportamiento.

El objetivo es fomentar la reutilización de código y mejorar la modularidad del sistema. Ampliamente utilizada en React, Angular y Vue.js.

### Ventajas

- ✓ **Reutilización de código** - Los componentes se usan en múltiples lugares
- ✓ **Facilidad de mantenimiento** - Cambios localizados sin afectar todo
- ✓ **Desarrollo más rápido** - Equipos pueden trabajar en paralelo
- ✓ **Mejor organización** - Código limpio, modular y fácil de entender
- ✓ **Escalabilidad** - Agregar funcionalidades sin modificar estructura
- ✓ **Consistencia visual** - Elementos visuales uniformes en toda la app

### Desventajas

- ✗ Mayor complejidad organizacional si no hay buena estructura
- ✗ Dependencias entre componentes pueden generar errores
- ✗ Necesidad de planificación correcta desde el inicio
- ✗ Mayor cantidad de pruebas requeridas
- ✗ Posible pérdida de legibilidad en aplicaciones muy grandes
- ✗ Requiere buena documentación de interfaces

### Casos de Uso Ideales

- Aplicaciones web con React, Angular o Vue
- Sistemas empresariales con múltiples módulos
- Paneles administrativos
- Tiendas en línea
- Aplicaciones SPA (Single Page Application)
- Proyectos donde trabajan varios desarrolladores simultáneamente

---

## 3️- Arquitectura Micro Frontends

### Descripción del Patrón

La arquitectura de Micro Frontends divide una aplicación web en pequeñas partes independientes y autónomas, cada una desarrollada, desplegada y mantenida de forma separada.

Inspirada en microservicios del backend, permite que equipos diferentes trabajen con distintas tecnologías. Ideal para plataformas grandes y complejas.

### Ventajas

- ✓ **Escalabilidad extrema** - Aplicaciones muy grandes se manejan bien
- ✓ **Independencia entre equipos** - Trabajo paralelo sin conflictos
- ✓ **Facilidad de mantenimiento** - Cada micro frontend se actualiza independientemente
- ✓ **Flexibilidad tecnológica** - Usa diferentes frameworks si lo necesita
- ✓ **Despliegues independientes** - No necesita desplegar todo
- ✓ **Mejor organización** - Estructura clara para grandes proyectos
- ✓ **Reutilización de módulos** - Entre diferentes proyectos

### Desventajas

- ✗ Mayor complejidad arquitectónica - Requiere integración cuidadosa
- ✗ Dificultad de integración - Comunicación entre módulos compleja
- ✗ Configuración inicial elevada - Más planificación requerida
- ✗ Posibles problemas de rendimiento - Si se implementa incorrectamente
- ✗ Mayor dificultad de pruebas - Pruebas unitarias e integración
- ✗ Duplicación de dependencias - Aumenta tamaño de aplicación
- ✗ Requiere equipos organizados - No es apropiado para equipos pequeños

### Casos de Uso Ideales

- Aplicaciones empresariales de gran tamaño
- Sistemas e-commerce con múltiples módulos complejos
- Plataformas bancarias o financieras
- Sistemas desarrollados por 10+ equipos simultáneamente
- Aplicaciones que necesitan despliegues independientes
- Plataformas que evolucionan constantemente

---

## Análisis Comparativo

| Criterio | Layer-Based | Component-Based | Micro Frontends |
|----------|---|---|---|
| **Escalabilidad** |  Buena | Muy Buena | Excelente |
| **Mantenibilidad** |  Muy Buena |  Muy Buena |  Muy Buena |
| **Curva de Aprendizaje** | Muy Baja |  Baja | Alta |
| **Onboarding** | Muy Rápido |  Rápido |  Lento |
| **Separación de Responsabilidades** |  Buena |  Excelente |  Excelente |
| **Reutilización de Código** |  Buena |  Excelente | Muy Buena |
| **Testing** | Bueno |  Excelente |  Bueno |
| **Para Equipos Pequeños** |  Ideal |  Bueno |  No Recomendado |
| **Overhead Inicial** | Bajo |  Medio |  Alto |

---

## Propuesta: Arquitectura Layer-Based

### Justificación Seleccionada

Para el **Sistema E-commerce "Tienda de Ropa"** se ha elegido la **Arquitectura Layer-Based** por las siguientes razones:

#### 1. **Contexto del Proyecto**
- Proyecto académico de Programación IV - Escala mediana
- Equipo de 5 personas - Requiere claridad y facilidad de coordinación
- Tiempo limitado de desarrollo - Necesita implementación rápida
- Objetivo educativo - Mejor comprensión de arquitectura frontend

#### 2. **Características Apropiadas**
- **Estructura intuitiva** - Todos entiendan dónde va cada cosa
-  **Fácil implementación** - Inicio rápido sin complejidad excesiva
-  **Escalabilidad controlada** - Crece ordenadamente
-  **Mantenimiento sencillo** - Cambios localizados y predecibles
-  **Onboarding inmediato** - Nuevos desarrolladores se integran rápido

#### 3. **Evita Problemas**
- No es tan simple como para limitar el crecimiento
- No es tan compleja como Micro Frontends (innecesaria para este equipo)
- Permite agregar funcionalidades sin refactorización mayor
- Mantiene claridad de propósito en cada carpeta

---

## Estructura de Carpetas Propuesta

```
src/
├── assets/                     # Recursos estáticos
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── components/                 # Componentes reutilizables
│   ├── Button.tsx
│   ├── ProductCard.tsx
│   ├── CheckoutForm.tsx
│   └── ...
│
├── pages/                      # Páginas/vistas principales
│   ├── HomePage.tsx
│   ├── ProductsPage.tsx
│   ├── CartPage.tsx
│   ├── CheckoutPage.tsx
│   └── OrdersPage.tsx
│
├── hooks/                      # Hooks personalizados
│   ├── useProducts.ts
│   ├── useCart.ts
│   ├── useOrders.ts
│   └── ...
│
├── services/                   # Lógica API y comunicación
│   ├── productService.ts
│   ├── cartService.ts
│   ├── orderService.ts
│   └── ...
│
├── store/                      # Estado global (Zustand)
│   ├── cartStore.ts
│   ├── productStore.ts
│   └── ...
│
├── routes/                     # Definición de rutas
│   ├── routes.tsx
│   └── ...
│
├── layouts/                    # Layouts base
│   ├── MainLayout.tsx
│   ├── AuthLayout.tsx
│   └── DashboardLayout.tsx
│
├── types/                      # Tipos e interfaces TypeScript
│   ├── productType.ts
│   ├── orderType.ts
│   ├── cartType.ts
│   └── userType.ts
│
├── utils/                      # Funciones utilitarias
│   ├── formatCurrency.ts
│   ├── calculateTotal.ts
│   └── ...
│
├── constants/                  # Constantes de la aplicación
│   ├── apiConstants.ts
│   ├── routeConstants.ts
│   └── ...
│
├── config/                     # Configuración global
│   ├── axios.ts               # Cliente HTTP
│   ├── env.ts                 # Variables de entorno
│   └── reactQuery.ts          # QueryClient
│
├── styles/                     # Estilos globales
│   └── globals.css
│
├── App.tsx                     # Componente raíz
└── main.tsx                    # Punto de entrada
```

---

##  Cómo Escala Esta Arquitectura

### Fase 1: MVP (Funcionalidades Básicas)
- Catálogo de productos
- Carrito de compras
- Checkout básico

**Estructura:** Todo cabe naturalmente en las carpetas propuestas

### Fase 2: Expansión (Nuevas Funcionalidades)
- Sistema de órdenes
- Panel de usuario
- Historial de compras

**Estructura:** Se agregan servicios, hooks, tipos y páginas sin refactorizar

### Fase 3: Escalamiento (Nuevo Dominio)
Si necesita agregar autenticación avanzada:
```
hooks/
├── useProducts.ts          (existente)
├── useCart.ts              (existente)
├── useAuth.ts              (nueva)
└── useUserProfile.ts       (nueva)

services/
├── productService.ts       (existente)
├── orderService.ts         (existente)
├── authService.ts          (nueva)
└── ...

store/
├── cartStore.ts            (existente)
├── authStore.ts            (nueva)
└── ...
```

**Sin refactorización** - Solo se agregan nuevos archivos.

---

##  Stack de Librerías Justificado

| Librería | Categoría | Por Qué |
|----------|-----------|--------|
| **React 19** | UI | Framework principal, estable |
| **TypeScript** | Tipado | Seguridad de tipos, mejor DX |
| **Vite 8** | Bundler | Rápido, moderno, excelente desarrollo |
| **React Router v7** | Enrutamiento | Estándar, gestión de rutas completa |
| **React Hook Form** | Formularios | Ligero, performante, fácil |
| **Zod** | Validación | Type-safe, mejor que alternatives |
| **TanStack Query** | Data Fetching | Manejo de caché inteligente |
| **Zustand** | Estado Global | Simple, sin boilerplate |
| **Axios** | HTTP Client | Interceptores, cancelación, timeouts |
| **Headless UI** | Componentes | Accesible, sin estilos preconcebidos |
| **TanStack React Table** | Tablas | Potente, flexible |

---

##  Ventajas para Este Proyecto

| Aspecto | Beneficio |
|--------|----------|
| **Equipo** | 5 personas coordinan fácilmente |
| **Tiempo** | Implementación rápida sin complejidad |
| **Educación** | Aprenden arquitectura ordenada y escalable |
| **Crecimiento** | Si evoluciona, no requiere refactorización |
| **Mantenimiento** | Cambios futuros son localizados |
| **Testing** | Fácil escribir pruebas por tipo |

---

## Referencias

**Documentos consultados:**
- Feature-Sliced Design. (2024). Frontend architecture guide.
- Martin Fowler. (2019). Micro Frontends - Software Architecture Patterns.
- TutorialsPoint. (2024). Component-Based Architecture.
- Angular Style Guide. (2024). Project Structure Best Practices.
- React Documentation. (2024). Project Setup Recommendations.

---

**Documento Preparado:** Mayo 2026  
**Proyecto:** Sistema E-commerce "Tienda de Ropa"  
**Arquitectura Elegida:** Layer-Based (Type-Based)  
**Universidad:** UNA, Sede Regional Chorotega, Campus Nicoya
