import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/experience' component={Experience} />
        <Route path='/education' component={Education} />
        <Route path='/skills' component={Skills} />
        <Route path='/projects' component={Projects} />
      </Layout>
    );
  }
}
