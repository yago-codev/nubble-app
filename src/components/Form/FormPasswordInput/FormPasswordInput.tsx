import React from 'react';

import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';

import {PasswordInput, PasswordInputProps} from '@components';

export function FormPasswordInput<FormType extends FieldValues>({
  name,
  control,
  ...passwordInputProps
}: PasswordInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({field, fieldState}) => (
        <PasswordInput
          {...passwordInputProps}
          onChange={field.onChange}
          errorMessage={fieldState.error?.message}
          value={field.value}
        />
      )}
    />
  );
}
