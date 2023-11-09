import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {IconProps} from '@components';
import {
  LoginScreen,
  SignUpScreen,
  SuccessScreen,
  ForgotPasswordScreen,
} from '@screens';

export type AuthStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  SuccessScreen: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'color' | 'name'>;
  };
  ForgotPasswordScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const screenOptions = {headerShown: false, fullScreenGestureEnabled: true};

export function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={screenOptions}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  );
}
