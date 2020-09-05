import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

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
   const route = useRoute();

   const { read } = route.params;

   function handleNavigateToHome() {
      navigate('Home');
   }

   return (
      <ScrollView showsVerticalScrollIndicator={false}>
         <Container>
            <Title>Parabéns</Title>
            <Subtitle>
               { read ?
                  'Sua historia ficou maravilhosa! Você é incrivel nisso!' :
                  'Você leu mais uma história! Eba!'
               }
            </Subtitle>

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