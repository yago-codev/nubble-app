import React, {ReactNode} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Box, TouchableOpacityBox, Icon, Text} from '@components';
import {useAppSafeArea, useAppTheme} from '@hooks';

import {
  ScrollViewContainer,
  ViewContainer,
} from './components/ScreenContainer/ScreenContainer';

interface ScreenProps {
  children: ReactNode;
  scrollable?: boolean;
  canGoBack?: boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          pb="s24"
          paddingHorizontal="s24"
          style={{
            paddingTop: top,
            paddingBottom: bottom,
          }}
          height={height}>
          {canGoBack && (
            <TouchableOpacityBox
              onPress={navigation.goBack}
              mb="s24"
              flexDirection="row"
              alignItems="center">
              <Icon name="arrowLeft" color="primary" size={20} />
              <Text preset="paragraphMedium" semiBold ml="s8">
                Voltar
              </Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
