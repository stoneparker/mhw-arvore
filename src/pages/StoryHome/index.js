import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

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
   const { navigate } = useNavigation();

   const { script } = route.params;

   const pages = script.pages;

   function handleNavigateToStory() {
      navigate('Story', { pages });
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