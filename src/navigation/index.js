import Home from '../components/Home';
import Chat from '../components/Chat';

import {
    createAppContainer,
    createStackNavigator,
} from 'react-navigation';


const Navigator = createStackNavigator({
    Home: { screen: Home },
    Chat: { screen: Chat },
});
const AppContainer = createAppContainer(Navigator);

export default AppContainer;