import React, { Component } from 'react';
import logo from '../../logo.svg';

import Home from '../../containers/Home/Home'
import Connect from '../../containers/Connect/Connect'
var background={
    backgroundColor:'#0084b4',
    minWidth: '100%',
    minHeight: '100%'

}
class App extends Component {
  render() {
      return (
          <div className="App" >
              <header>
                  <h1>Tweeeeter</h1>
                  <h3>Now tweet Longer</h3>
              </header>
              <Home/>
              <Connect/>

          </div>
      );
  }
}

export default App;
