import Home from './components/Home';
import Chat from './components/Chat';

import { createStackNavigator } from 'react-navigation';

const Navigator = createStackNavigator({
    Home,
    Chat
});

export default Navigator;