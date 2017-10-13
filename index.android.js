/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {Navigation} from 'react-native-navigation';
import Home from './src/Home';

Navigation.registerComponent('Home', () => Home);

Navigation.startSingleScreenApp({
    screen: {
        screen: 'Home', // unique ID registered with Navigation.registerScreen
        title: 'Welcome', // title of the screen as appears in the nav bar (optional)
    }
});

