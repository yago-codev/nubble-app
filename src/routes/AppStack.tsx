import React from 'react';

import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppTabBottomTabParamList, AppTabNavigator} from '@routes';
import {SettingsScreen} from '@screens';

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
  SettingsScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const screenOptions = {headerShown: false, fullScreenGestureEnabled: true};

export function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="AppTabNavigator"
      screenOptions={screenOptions}>
      <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
