import Head from 'next/head';
import React, { useContext, useEffect, useState } from 'react';
import { Transition } from 'semantic-ui-react';

import { UserContext } from '../../lib/context';
import { getUserWithEmail } from '../../lib/firebase';

export async function getServerSideProps({ query }) {
  const { id } = query;
  const userDoc = await getUserWithEmail(id);

  if (!userDoc) {
    return {
      notFound: true,
    };
  }

  let currentUser = null;

  if (userDoc) {
    currentUser = userDoc.data();
  }
  return {
    props: { currentUser },
  };
}

export default function User({ currentUser }) {
  const [visible, setVisible] = useState(false);
  const {
    username,
    state: { amount },
  } = currentUser;

  useEffect(() => {
    if (username) {
      setVisible(!visible);
    }
  }, [username]);

  return (
    <Transition visible={visible} animation="drop" duration={500}>
      <div style={{ height: '70vh' }}>
        <Head>
          <title>User Page</title>
        </Head>
        <h1>User {username}</h1>
        <h2>Total amount: {amount}</h2>
      </div>
    </Transition>
  );
}
