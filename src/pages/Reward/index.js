import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';

import PrimaryBtn from '../../components/PrimaryBtn';

import { 
   Container,
   Title,
   Subtitle,
   Text,
   RewardContainer,
   RewardTitle,
   RewardImage,
   CardStar,
   CardStarText,
   CardStarzinha
} from './styles';

const Reward = () => {
   const [liked, setLiked] = useState(true);

   const { navigate } = useNavigation();
   const route = useRoute();

   const { read } = route.params;

   function handleNavigateToHome() {
      navigate('Home');
   }

   return (
      <ScrollView showsVerticalScrollIndicator={false}>
         <StatusBar style="dark" />
         <Container>
            <Title>Parabéns</Title>
            <Subtitle>
               { !read ?
                  'Sua historia ficou maravilhosa! Você é incrivel nisso!' :
                  'Você leu mais uma história! Eba!'
               }
            </Subtitle>

            <Text>Você desbloqueou:</Text>

            <RewardContainer>
               <RewardTitle>Uma chave para uma outra história!</RewardTitle>
               <RewardImage source={require('../../assets/smart-key.png')} />
            </RewardContainer>

            { read ?
               <CardStar>
                  <CardStarText>Você gostou dessa história? Você pode presentear quem escreveu com uma estrela.</CardStarText>
                  <CardStarzinha onPress={() => setLiked(!liked)} >
                     <MaterialIcons name={liked ? 'star' : 'star-border' } size={29} color={liked ? '#FFC107' : '#999' } />
                  </CardStarzinha>
               </CardStar>   
            : ''}

            <PrimaryBtn text="Encontrar nova aventura" onPress={handleNavigateToHome} />
         </Container>
      </ScrollView>
   );
}

export default Reward;