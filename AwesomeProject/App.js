import { StackNavigator } from 'react-navigation';
import React from 'react';
import HomeView from './src/home';
import UserView from './src/user';
const App = StackNavigator({
  Home: { screen: HomeView },
  User: { screen: UserView }
}, {
    initialRouteName: 'Home'
  });
  export default App;