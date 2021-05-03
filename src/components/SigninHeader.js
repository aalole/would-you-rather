import React from 'react';
import { Header } from 'semantic-ui-react';

const SignInHeader = () => (
    <Header as="h4" block attached="top" style={{backgroundColor: "#fb8500"}} textAlign="center">
      <Header.Content style={{color: "#fff"}}>Welcome to the Would You Rather App!</Header.Content>
      <Header.Subheader>Please sign in to continue</Header.Subheader>
    </Header>
  );

  export default SignInHeader;