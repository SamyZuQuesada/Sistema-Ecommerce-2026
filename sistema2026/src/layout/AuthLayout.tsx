import { ReactNode } from 'react';

type AuthLayoutProps = {
  children: ReactNode;
};

export const AuthLayout = ({
  children,
}: AuthLayoutProps) => {
  return (
    <div>
      {children}
    </div>
  );
};