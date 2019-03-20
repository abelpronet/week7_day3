import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About'
import { Projects as projects } from './components/Projects'
import ProjectDetails from './components/ProjectDetails'

class App extends Component {
  render() {
    return (
      <div className="App">

        <NavBar />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route exact path='/projects' component={projects} />
          <Route exact path="/projects/:id" component={ProjectDetails} />
        </Switch>

      </div>
    )
  }
}

export default App;