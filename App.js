
import { createAppContainer , createSwitchNavigator} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { Provider as AuthProvider } from './src/context/AuthContext';
import AccountScreen from './src/screen/AccountScreen';
import SigninScreen from './src/screen/SigninScreen';
import SignupScreen from './src/screen/SignupScreen';
import TrackCreateScreen from './src/screen/TrackCreateScreen';
import TrackListScreen from './src/screen/TrackListScreen';
import TrackDetailsScreen from './src/screen/TrackDetailsScreen';
import React from 'react';
import { setNavigator } from './src/navigatorRef';
import ResolveAuth from './src/screen/ResolveAuth';

const switchNavigator = createSwitchNavigator({
  Resolveauth:ResolveAuth,
  loginFlow: createStackNavigator({
      Signup: SignupScreen,
      Signin:  SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetails:TrackDetailsScreen
    }),
    CreateTrack: TrackCreateScreen,
    Account:AccountScreen

  })
});

const App = createAppContainer(switchNavigator);

export default () =>{

  return ( 
    
    <AuthProvider>
      <App  ref={ (navigator) => { setNavigator (navigator) }}/>
    </AuthProvider>
    
    );

};

