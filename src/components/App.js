import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div style = {{ background: '#ADBCE6'}}>
        <h1>Test</h1>
        <Header />
        <br/>
        <Home />
      </div>
    );
  }
}

export default App;
