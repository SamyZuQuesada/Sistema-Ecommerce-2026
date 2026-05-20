import { ReactNode } from 'react';

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({
  children,
}: MainLayoutProps) => {
  return (
    <div>
      <header>Navbar</header>

      <main>{children}</main>

      <footer>Footer</footer>
    </div>
  );
};