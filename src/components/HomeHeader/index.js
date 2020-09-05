import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import BtnHeader from '../../components/BtnHeader';

import { Container } from './styles';

const HomeHeader = () => {
   const { navigate } = useNavigation();

   function navigateToProfile() {
      navigate('Profile');
   }

  return (
      <Container>
         <BtnHeader color="#F2D7EE">
            <Feather name="search" color="#3D3D3D" size={20} />
         </BtnHeader>
            <Image 
               source={require('../../assets/logo.png')}
               style={{ width: 60, height: 60 }} 
               resizeMode="contain" 
            />
         <BtnHeader color="#F8B180" onPress={navigateToProfile}>
            <Feather name="user" color="#3D3D3D" size={20} />
         </BtnHeader>
      </Container>
  );
}

export default HomeHeader;