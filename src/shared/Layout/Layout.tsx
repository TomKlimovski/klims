import React from 'react';

import Footer from './Footer/Footer';
import { footerData, headerData, logoSource } from './Layout.data';
import Header from './Navbar/Header';
import HeaderWithSearch from './Navbar/HeaderWithSearch/HeaderWithSearch';

interface AuxProps {
  children: React.ReactNode;
  searchKeyword?: string | string[];
}

const Layout = ({ children, searchKeyword }: AuxProps) => (
  <>
    {!searchKeyword ? (
      <Header navigation={headerData} logo={logoSource} />
    ) : (
      <HeaderWithSearch keyword={searchKeyword} logo={logoSource} />
    )}
    <main>{children}</main>
    <Footer navigation={footerData} />
  </>
);

export default Layout;
