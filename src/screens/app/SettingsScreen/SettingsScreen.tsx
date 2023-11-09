import React from 'react';

import {AppScreenProps} from 'src/types/reactNavigationGlobalType';

import {Screen, Text} from '@components';

type SettingsScreenProps = AppScreenProps<'SettingsScreen'>;

export function SettingsScreen({navigation}: SettingsScreenProps) {
  return (
    <Screen canGoBack>
      <Text
        preset="headingSmall"
        onPress={() =>
          navigation.navigate('AppTabNavigator', {screen: 'NewPostScreen'})
        }>
        Settings Screen
      </Text>
    </Screen>
  );
}
