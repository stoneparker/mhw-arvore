import React from 'react';
import { Text, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

import PrimaryBtn from '../../components/PrimaryBtn';

import { 
   Container,
   Cover,
   Content,
   Synopsis,
   Label,
   Input,
} from './styles';

const StoryHome = () => {
   const route = useRoute();

   const { script } = route.params;

   function handleNavigateToStory() {
      alert('teste');
   }

   return (
      <Container>
         <Cover />
         <Content>
            <Synopsis>{script.synopsis}</Synopsis>

            <Label>Dê um nome para essa história</Label>
            <Input placeholder="Seu título incrível" />

            <PrimaryBtn onPress={handleNavigateToStory} />
         </Content>
      </Container>
   );
}

export default StoryHome;