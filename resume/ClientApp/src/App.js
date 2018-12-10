import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Expertise } from './components/Expertise';
import { Evidence } from './components/Evidence';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/experience' component={Experience} />
        <Route path='/education' component={Education} />
        <Route path='/expertise' component={Expertise} />
        <Route path='/evidence' component={Evidence} />
      </Layout>
    );
  }
}
