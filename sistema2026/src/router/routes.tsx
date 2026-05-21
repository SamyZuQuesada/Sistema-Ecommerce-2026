import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layout/MainLayout';
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { OrdersPage } from '../pages/OrdersPage';

export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  PRODUCT_DETAIL: '/products/:id',
  CART: '/cart',
  CHECKOUT: '/checkout',
  ORDERS: '/orders',
} as const;

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.PRODUCTS,
        element: <ProductsPage />,
      },
      {
        path: ROUTES.CART,
        element: <CartPage />,
      },
      {
        path: ROUTES.CHECKOUT,
        element: <CheckoutPage />,
      },
      {
        path: ROUTES.ORDERS,
        element: <OrdersPage />,
      },
    ],
  },
]);
