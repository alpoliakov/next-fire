import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Button, Divider, Form, Grid, Icon, Segment } from 'semantic-ui-react';

import { auth, firestore } from '../../lib/firebase';

const state = {
  amount: 500,
};

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { push } = useRouter();

  const handlerSubmit = async (e) => {
    e.preventDefault();
    await auth
      .createUserWithEmailAndPassword(email.trim(), password)
      .then(function (firebaseUser) {
        const user = firebaseUser.user;
        const userDoc = firestore.doc(`users/${user.uid}`);

        const batch = firestore.batch();
        batch.set(userDoc, { username: name, email, role: 'user', state });
        batch.commit();
        push(`/user/${user.uid}`);
      })
      .catch((error) => {
        console.log(email);
        const text = error.message;
        toast.error(text);
      });
  };

  return (
    <Segment placeholder style={{ height: '70vh' }}>
      <Head>
        <title>Sign up Page</title>
      </Head>
      <Grid columns={2} relaxed="very" stackable>
        <Grid.Column>
          <Form>
            <Form.Input
              icon="user"
              iconPosition="left"
              label="Username"
              placeholder="Username"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Input
              icon="mail"
              iconPosition="left"
              name="email"
              type="email"
              label="Email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Input
              icon="lock"
              iconPosition="left"
              label="Password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button content="Submit" primary onClick={handlerSubmit} />
          </Form>
        </Grid.Column>

        <Grid.Column verticalAlign="middle">
          <Link href="/signin">
            <Button animated="vertical" color="olive" size="big">
              <Button.Content visible>
                <Icon name="sign-in" /> Sign In
              </Button.Content>
              <Button.Content hidden>
                <Icon name="sign-in" /> Sign In
              </Button.Content>
            </Button>
          </Link>
        </Grid.Column>
      </Grid>
      <Divider vertical>Or</Divider>
    </Segment>
  );
}
