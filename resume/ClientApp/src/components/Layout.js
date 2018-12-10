import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { TopBar } from './TopBar.js'

export class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
      <Grid fluid>
        <TopBar/>
        <div>
          {this.props.children}
        </div>
      </Grid>
    );
  }
}
