import React, { Component } from 'react';
import './App.css';

import Header from './components/stateless/Header'
import Title from './components/stateless/Title'
import DynamicMoviesList from './components/stateful/DynamicMovies';

class App extends Component {


  render() {

    return (

      < main className="App" >

        <Header />

        <section>

          <Title text="Listado de películas" />

          <DynamicMoviesList />

        </section>

      </main >
    )
  }
}

export default App;
