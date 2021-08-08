import { createStackNavigator } from 'react-navigation-stack';
import { createBrowserApp } from '@react-navigation/web';

import Feed from './App/Actions/FeedActions';
import Landing from './App/Actions/LandingActions';
//Maintains Navigation
const Home = createStackNavigator(
    {
        Feed: {
            screen: Feed,
            navigationOptions: {
                title: `My Feed`,
            },
            path: "Feed"
        },
        Login: {
            screen: Landing,
            navigationOptions: {
                title: `Login`,
            },
            path: ""
        }
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#000',
            },

        },

    },
    { initialRouteName: 'Login' }

);

const container = createBrowserApp(Home);

export default container;