import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Home } from '../screens/home';
import { Editor } from '../screens/editor';

const screens = {
    Home: {
        screen: Home
    },
    Editor: {
        screen: Editor
    }
}

const HomeStack = createStackNavigator({screens})

export default createAppContainer(HomeStack);