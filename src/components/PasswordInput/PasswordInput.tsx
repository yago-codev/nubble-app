import React, {useState} from 'react';

import {TextInput, TextInputProps, Icon} from '@components';

export type PasswordInputProps = Omit<TextInputProps, 'rightComponent'>;

export function PasswordInput({label, placeholder}: PasswordInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
  function toggleSecureTextEntry() {
    setIsSecureTextEntry(prevState => !prevState);
  }
  return (
    <TextInput
      label={label}
      placeholder={placeholder}
      rightComponent={
        <Icon
          name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'}
          color="gray2"
          onPress={toggleSecureTextEntry}
        />
      }
      secureTextEntry={isSecureTextEntry}
    />
  );
}
