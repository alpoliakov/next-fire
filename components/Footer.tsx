import Image from 'next/image';
import React from 'react';
import { Divider, Grid, Header, Segment } from 'semantic-ui-react';

export default function Footer() {
  return (
    <Segment size="big" basic clearing verticalAlign="middle">
      <Divider section />
      <Grid columns="equal" verticalAlign="middle" centered stackable relaxed>
        <Grid.Column textAlign="center">
          <a href="https://rs.school/react/" target="_blank" rel="noreferrer">
            <Image src="/rs_school_logo.svg" alt="RS-School logo" height={32} width={150} />
          </a>
        </Grid.Column>
        <Grid.Column textAlign="center">
          <Header as="h2">
            Created 2021:{' '}
            <a href="https://github.com/alpoliakov" target="_blank" rel="noreferrer">
              @alpoliakov
            </a>
          </Header>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}
