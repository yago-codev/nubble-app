import React from 'react';

import {
  Text,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
  ActivityIndicator,
} from '@components';

import {ButtonPreset, buttonPresets} from './ButtonPresets';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset: ButtonPreset;
  disabled?: boolean;
}

export function Button({
  title,
  loading = false,
  preset = 'primary',
  disabled = false,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];
  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color={buttonPreset.content} />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
