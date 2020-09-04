import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { 
   Container,
   Title,
   Subtitle,
   Text,
   RewardContainer,
   RewardTitle,
   RewardImage,
} from './styles';
import PrimaryBtn from '../../components/PrimaryBtn';

const Reward = () => {
   const { navigate } = useNavigation();

   function handleNavigateToHome() {
      navigate('Home')
   }

   return (
      <ScrollView showsVerticalScrollIndicator={false}>
         <Container>
            <Title>Parabéns</Title>
            <Subtitle>Sua historia ficou maravilhosa! Você é incrivel nisso!</Subtitle>

            <Text>Você desbloqueou:</Text>

            <RewardContainer>
               <RewardTitle>Uma chave para uma outra história!</RewardTitle>

               <RewardImage source={require('../../assets/smart-key.png')} />
            </RewardContainer>

            <PrimaryBtn text="Encontrar nova aventura" onPress={handleNavigateToHome} />
         </Container>
      </ScrollView>
   );
}

export default Reward;