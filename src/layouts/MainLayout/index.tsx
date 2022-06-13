import type { ReactNode } from 'react';

import Navbar from '@layouts/MainLayout/Navbar';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => (
  <>
    <Navbar />
    {children}
  </>
);

export default MainLayout;
