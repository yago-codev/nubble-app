import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {AuthScreenProps} from 'src/types/reactNavigationGlobalType';

import {Screen, Text, FormTextInput, Button} from '@components';
import {useResetNavigationSuccessScreen} from '@hooks';

import {
  ForgotPasswordFormType,
  forgotPasswordScreenSchema,
} from './forgotPasswordScreenSchema';

type ForgotPasswordScreenProps = AuthScreenProps<'ForgotPasswordScreen'>;

export function ForgotPasswordScreen({}: ForgotPasswordScreenProps) {
  const {control, handleSubmit, formState} = useForm<ForgotPasswordFormType>({
    resolver: zodResolver(forgotPasswordScreenSchema),
    defaultValues: {
      email: '',
    },
  });
  const {reset} = useResetNavigationSuccessScreen();
  function submitForm({}: ForgotPasswordFormType) {
    reset({
      icon: {
        name: 'messageRound',
        color: 'grayWhite',
      },
      title: 'Enviamos as instruções \npara seu e-mail',
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
    });
  }
  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mt="s24">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" mt="s16" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
      />
      <Button
        disabled={!formState.isValid}
        preset="primary"
        title="Recuperar senha"
        mt="s48"
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}
