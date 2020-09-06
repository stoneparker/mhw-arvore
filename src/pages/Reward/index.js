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
   const [liked, setLiked] = useState(false);

   const { navigate } = useNavigation();

   const route = useRoute();
   const { read } = route.params;

   function handleNavigateToHome() {
      navigate('Home');
   }

   return (
      <ScrollView showsVerticalScrollIndicator={false}>
         <StatusBar style="dark" backgroundColor="#f3f3f3" />
         <Container>
            <Title>Parabéns</Title>
            <Subtitle>
               { !read ?
                  'Sua historia ficou maravilhosa! Você é incrivel nisso!' :
                  'Você leu mais uma história! Eba!'
               }
            </Subtitle>

            { read ?
               false :
               <Text>Você desbloqueou:</Text>
            }

            <RewardContainer color={ read ? '#1B9F97' : '#D92626' }>
               <RewardTitle>{ read ? 'Faça como na história e experimente coisas novas com a familia!' : 'Uma chave para uma outra história' }</RewardTitle>
               <RewardImage source={ read ? require('../../assets/heart.png') : require('../../assets/smart-key.png')} />
            </RewardContainer>

            { read ?
               <CardStar>
                  <CardStarText>Você gostou dessa história? Você pode presentear quem escreveu com uma estrela.</CardStarText>
                  <CardStarzinha onPress={() => setLiked(!liked)} >
                     <MaterialIcons name={liked ? 'star' : 'star-border' } size={29} color={liked ? '#FFC107' : '#999' } />
                  </CardStarzinha>
               </CardStar>
            : false }

            <PrimaryBtn text="Encontrar nova aventura" onPress={handleNavigateToHome} />
         </Container>
      </ScrollView>
   );
}

export default Reward;