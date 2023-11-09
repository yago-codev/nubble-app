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

import {LoginFormType, loginScreenSchema} from './loginScreenSchema';

type LoginScreenProps = AuthScreenProps<'LoginScreen'>;

export function LoginScreen({navigation}: LoginScreenProps) {
  const {control, formState, handleSubmit} = useForm<LoginFormType>({
    resolver: zodResolver(loginScreenSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function navigationToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigationToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  async function submitForm({}: LoginFormType) {}

  return (
    <Screen>
      <Text preset="headingLarge" mb="s8">
        Olá!
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>
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
      <Text
        bold
        color="primary"
        mt="s8"
        onPress={navigationToForgotPasswordScreen}>
        Esqueci minha senha
      </Text>
      <Button
        disabled={!formState.isValid}
        preset="primary"
        title="Entrar"
        mt="s48"
        onPress={handleSubmit(submitForm)}
      />
      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(navigationToSignUpScreen)}
        preset="outline"
        title="Criar uma conta"
        mt="s8"
      />
    </Screen>
  );
}
