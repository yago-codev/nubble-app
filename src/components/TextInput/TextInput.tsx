import React, {useRef, ReactElement} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';

import {useAppTheme} from '@hooks';

import {Box, BoxProps} from '../Box/Box';
import {Text, $fontFamily, $fontSizes} from '../Text/Text';

export interface TextInputProps extends RNTextInputProps {
  label: string;
  icon?: boolean;
  errorMessage?: string;
  rightComponent?: ReactElement;
  boxProps?: BoxProps;
}

export function TextInput({
  label,
  errorMessage,
  rightComponent,
  boxProps,
  ...props
}: TextInputProps) {
  const $textInputContainer: BoxProps = {
    borderWidth: errorMessage ? 2 : 1,
    borderColor: errorMessage ? 'redError' : 'gray4',
    padding: 's16',
    borderRadius: 's12',
    flexDirection: 'row',
    alignItems: 'center',
  };

  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <Box {...boxProps}>
      <Pressable onPress={focusInput}>
        <Text mb="s4" preset="paragraphMedium">
          {label}
        </Text>
        <Box {...$textInputContainer}>
          <RNTextInput
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            style={$textInput}
            autoCapitalize="none"
            {...props}
          />
          {rightComponent && <Box ml="s16">{rightComponent}</Box>}
        </Box>
        {errorMessage && (
          <Text preset="paragraphSmall" bold color="redError">
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  );
}

const $textInput = {
  padding: 0,
  fontFamily: $fontFamily.regular,
  flexGrow: 1,
  flexShrink: 1,
  ...$fontSizes.paragraphMedium,
};
