import React, { Component } from 'react';
import Chat from './src/components/Chat.js';
import Home from './src/components/Home.js';

import { Router, Scene } from 'react-native-router-flux';
import { Platform } from 'react-native';
class App extends Component{
  render(){
    return (
      <Router>
        <Scene key='root' style={{ paddingTop: Platform.OS === 'ios' ? 64 : 54}}>
          <Scene key='home' component={Home} title='Home' />
          <Scene key='chat' component={Chat} title='Chat' />
        </Scene>
      </Router>
    );
  }
}
export default App;