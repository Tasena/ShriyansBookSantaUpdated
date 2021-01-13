import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import RequestScreen from '../screens/requestScreen';
import DonateScreen from '../screens/donateScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export const AppTabNavigator = createBottomTabNavigator(
    {
      Donate: { screen: DonateScreen, navigationOptions: {
        tabBarIcon: <Image source={require('../assets/request-list.png')} style={{width:20, height:20}}/>,
        tabBarLabel: 'Donate Books'
      } },
      Request: { screen: RequestScreen, navigationOptions: {
        tabBarIcon: <Image source={require('../assets/request-book.png')} style={{width:20, height:20}}/>,
        tabBarLabel: 'Request Books'
      } },
    },
  );