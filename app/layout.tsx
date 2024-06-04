import './globals.css';
import { ReactNode } from 'react';
import Header from './_components/layouts/Header';
import Footer from './_components/layouts/Footer';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;