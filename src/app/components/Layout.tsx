import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';

export const Layout = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <div className="relative flex flex-col min-h-screen font-sans bg-black text-white selection:bg-[#f28900] selection:text-white">
      <Header />
      <main className={`flex-grow ${isHome ? '' : 'pt-[100px]'}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
