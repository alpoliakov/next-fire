import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Button, Divider, Form, Grid, Icon, Segment } from 'semantic-ui-react';

import { auth } from '../../lib/firebase';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    await auth
      .signInWithEmailAndPassword(email.trim(), password)
      .then(function (firebaseUser) {
        const user = firebaseUser.user;
        router.push(`/user/${user.uid}`);
      })
      .catch((error) => {
        const text = error.message;
        toast.error(text);
      });
  };

  return (
    <Segment placeholder style={{ height: '70vh' }}>
      <Head>
        <title>Sign in Page</title>
      </Head>
      <Grid columns={2} relaxed="very" stackable>
        <Grid.Column>
          <Form>
            <Form.Input
              icon="mail"
              iconPosition="left"
              name="email"
              type="email"
              label="Email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Input
              icon="lock"
              iconPosition="left"
              label="Password"
              type="password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button content="Login" primary onClick={handlerLogin} />
          </Form>
        </Grid.Column>

        <Grid.Column verticalAlign="middle">
          <Link href="/signup">
            <Button animated="vertical" color="olive" size="big">
              <Button.Content visible>
                <Icon name="signup" /> Sign Up
              </Button.Content>
              <Button.Content hidden>
                <Icon name="signup" /> Sign Up
              </Button.Content>
            </Button>
          </Link>
        </Grid.Column>
      </Grid>

      <Divider vertical>Or</Divider>
    </Segment>
  );
}
