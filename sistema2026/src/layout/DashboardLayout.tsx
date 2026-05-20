import { ReactNode } from 'react';

type DashboardLayoutProps = {
  children: ReactNode;
};

export const DashboardLayout = ({
  children,
}: DashboardLayoutProps) => {
  return (
    <div>
      <aside>Sidebar</aside>

      <main>{children}</main>
    </div>
  );
};