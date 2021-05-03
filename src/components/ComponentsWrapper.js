import React from 'react';
import { Grid } from "semantic-ui-react";

const ComponentsWrapper = ({ children }) => {
    return (
      <div className="main-wrapper">
        <div className="row" >
          <Grid.Column>{children}</Grid.Column>
        </div>
      </div>
    );
  };

export default ComponentsWrapper;