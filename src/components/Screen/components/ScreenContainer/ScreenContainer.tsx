import React, {ReactNode} from 'react';
import {ScrollView, View} from 'react-native';

interface ScreenContainerProps {
  children: ReactNode;
  backgroundColor: string;
}

export function ScrollViewContainer({
  children,
  backgroundColor,
}: ScreenContainerProps) {
  return (
    <ScrollView style={{backgroundColor}} keyboardShouldPersistTaps="handled">
      {children}
    </ScrollView>
  );
}

export function ViewContainer({
  children,
  backgroundColor,
}: ScreenContainerProps) {
  return <View style={{backgroundColor}}>{children}</View>;
}
