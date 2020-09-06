import React from 'react';
import { useNavigation } from '@react-navigation/native';

import BtnAuth from '../../components/BtnAuth';

import { 
  Container,
  Content,
  Title,
  Subtitle,
  Logo
} from './styles';

const AuthHome = () => {
  const { navigate } = useNavigation();

  function navigateToSignIn() {
    navigate('SignIn');
  }

  function navigateToSignUp() {
    navigate('SignUp');
  }

  return (
    <Container>
      <Content>
        <Title>1, 2, 3...{'\n'}Era uma vez!</Title>
        <Subtitle>Sua fábrica de histórias</Subtitle>

        <Logo source={require('../../assets/logo.png')} resizeMode="contain" />

        <BtnAuth text="Login" onPress={navigateToSignIn} />
        <BtnAuth text="Cadastro" onPress={navigateToSignUp} />
      </Content>
    </Container>
  );
}

export default AuthHome;