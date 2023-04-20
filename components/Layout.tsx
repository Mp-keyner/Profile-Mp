import React, { ReactNode } from 'react';
import Navart from './Navart';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navart />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
