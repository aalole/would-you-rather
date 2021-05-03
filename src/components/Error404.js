import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

export class Error404 extends Component {
  render() {
    return (
      <Container textAlign="center">
        <h3>Error 404 🤫</h3>
        <p>Nothing to see here. Please use the right route.</p>
      </Container>
    );
  }
}

export default Error404;