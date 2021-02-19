import Head from 'next/head';
import React from 'react';

import Footer from './Footer';
import NavBar from './Navbar';

export default function Layout({ children }) {
  return (
    <div style={{ width: '95%', margin: '0 auto' }}>
      <Head>
        <title>React-Game</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
