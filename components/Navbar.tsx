import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import {
  Breadcrumb,
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Segment,
  Sticky,
} from 'semantic-ui-react';

import { UserContext } from '../lib/context';
import { auth } from '../lib/firebase';

export default function NavBar() {
  const [theme, setTheme] = useState(false);
  const { user, username } = useContext(UserContext);

  const router = useRouter();

  const signOut = () => {
    auth.signOut();
    router.push('/signin');
  };

  return (
    <Segment size="big" basic clearing verticalAlign="middle">
      <Grid columns="equal" verticalAlign="middle" centered stackable relaxed>
        <Grid.Row centered>
          <Grid.Column textAlign="center">
            <Breadcrumb size="big">
              <Breadcrumb.Section active>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </Breadcrumb.Section>
              <Breadcrumb.Divider icon="right chevron" />
              <Breadcrumb.Section>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </Breadcrumb.Section>
              <Breadcrumb.Divider icon="right chevron" />
              <Breadcrumb.Section>
                <Link href="/rules">
                  <a>Rules</a>
                </Link>
              </Breadcrumb.Section>
            </Breadcrumb>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <Header as="h1">Centering Content</Header>
          </Grid.Column>
          <Grid.Column textAlign="center">
            {username && (
              <>
                <Button animated="vertical" primary onClick={signOut}>
                  <Button.Content visible>Logout</Button.Content>
                  <Button.Content hidden>Logout</Button.Content>
                </Button>
                <Button animated="vertical" primary>
                  <Button.Content visible>User</Button.Content>
                  <Button.Content hidden>User</Button.Content>
                </Button>
              </>
            )}
            {!username && (
              <Button.Group>
                <Link href="/signin">
                  <Button animated="vertical" color="olive">
                    <Button.Content visible>Sign In</Button.Content>
                    <Button.Content hidden>Sign In</Button.Content>
                  </Button>
                </Link>
                <Button.Or />
                <Link href="/signup">
                  <Button animated="vertical" color="olive">
                    <Button.Content visible>Sign Up</Button.Content>
                    <Button.Content hidden>Sign Up</Button.Content>
                  </Button>
                </Link>
              </Button.Group>
            )}
          </Grid.Column>
        </Grid.Row>
        <Divider section />
      </Grid>
    </Segment>
  );
}
