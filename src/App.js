import React from 'react';
import { Home, Chat } from './components'

import { Router, Scene } from 'react-native-router-flux';

export default function App() {
  return (
    <Router>
      <Scene key='root'>
        <Scene key='home' component={Home} title='Home'/>
        <Scene key='chat' component={Chat} title='Chat' />

      </Scene>
    </Router>
  );
}