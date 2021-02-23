import Head from 'next/head';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Container } from 'semantic-ui-react';

import Footer from './Footer';
import NavBar from './Navbar';

export default function Layout({ children }) {
  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      <Head>
        <title>React-Game</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
      <Toaster />
      <NavBar />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
}
