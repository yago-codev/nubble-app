import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {AuthScreenProps} from 'src/types/reactNavigationGlobalType';

import {
  Screen,
  Text,
  FormTextInput,
  FormPasswordInput,
  Button,
} from '@components';
import {useResetNavigationSuccessScreen} from '@hooks';

import {SignUpFormType, signUpScreenSchema} from './signUpScreenSchema';

type SignUpScreenProps = AuthScreenProps<'SignUpScreen'>;

export function SignUpScreen({}: SignUpScreenProps) {
  const {control, handleSubmit, formState} = useForm<SignUpFormType>({
    resolver: zodResolver(signUpScreenSchema),
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const {reset} = useResetNavigationSuccessScreen();

  async function submitForm({}: SignUpFormType) {
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    });
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" bold mb="s32">
        Criar uma conta
      </Text>
      <FormTextInput
        control={control}
        name="username"
        label="Seu username"
        placeholder="@"
        boxProps={{mb: 's20'}}
      />
      <FormTextInput
        control={control}
        name="fullName"
        label="Nome completo"
        placeholder="Digite seu nome completo"
        boxProps={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />
      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
      />
      <Button
        disabled={!formState.isValid}
        title="Criar minha conta"
        preset="primary"
        mt="s48"
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}
