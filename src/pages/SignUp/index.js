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

const SignUp = () => {
  const { navigate } = useNavigation();

  function handleSignUp() {
    navigate('Home');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <Title>Crie um perfil e vamos ler e criar historias juntos</Title>
        <Logo source={require('../../assets/logo.png')} resizeMode="cover" />
        <Card>
          <InputAuth label="E-mail do responsável" />
          <InputAuth label="Nome da criança" />
          <InputAuth label="Idade da criança" />
          <InputAuth label="Senha" />
          <BtnAuth text="Entrar" onPress={handleSignUp} />
        </Card>
      </Container>
    </ScrollView>
  );
}

export default SignUp;