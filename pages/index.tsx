import Head from 'next/head';
import React from 'react';
import toast from 'react-hot-toast';
import { Button, Container } from 'semantic-ui-react';

import Loader from '../components/Loader';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <h1>Home Page</h1>
      <Loader show />
      <Button primary onClick={() => toast.success('Success toast!')}>
        Primary
      </Button>
    </div>
  );
}
