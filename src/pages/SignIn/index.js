import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import InputAuth from '../../components/InputAuth';
import BtnAuth from '../../components/BtnAuth';

import { 
  Container,
  Title,
  Logo,
  Card
} from './styles';

const SignIn = () => {
  const { navigate } = useNavigation();

  function handleSignIn() {
    navigate('Home');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <Title>Olá!{'\n'}Vamos ler e criar historias?</Title>
        <Logo source={require('../../assets/logo.png')} resizeMode="cover" />
        <Card>
          <InputAuth label="E-mail do responsável" />
          <InputAuth label="Senha" />
          <BtnAuth text="Entrar" onPress={handleSignIn} />
        </Card>
      </Container>
    </ScrollView>
  );
}

export default SignIn;