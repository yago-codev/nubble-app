import React from 'react';

import {AuthScreenProps} from 'src/types/reactNavigationGlobalType';

import {Screen, Icon, Text, Button} from '@components';

type SuccessScreenProps = AuthScreenProps<'SuccessScreen'>;

export function SuccessScreen({navigation, route}: SuccessScreenProps) {
  const {title, description, icon} = route.params;
  function goBackToBegin() {
    navigation.goBack();
  }

  return (
    <Screen>
      <Icon name={icon.name} color={icon.color} />
      <Text preset="headingLarge" mt="s24">
        {title}
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        {description}
      </Text>
      <Button
        mt="s40"
        preset="primary"
        title="Voltar ao início"
        onPress={goBackToBegin}
      />
    </Screen>
  );
}
