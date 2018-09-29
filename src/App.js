import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <div class="App">
        <Home />
      </div>
    );
  }
}

export default App;