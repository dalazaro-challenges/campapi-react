import React, { Component } from 'react'
import './App.css'
import Header from './components/Header.js'
import FeaturesContainer from './containers/FeaturesContainer.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FeaturesContainer />
      </div>
    );
  }
}

export default App
