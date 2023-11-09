import React from 'react';

import {AppTabScreenProps} from 'src/types/reactNavigationGlobalType';

import {Button, Screen, Text} from '@components';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge">Home Screen</Text>
      <Button
        preset="primary"
        title="Settings"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    </Screen>
  );
}
