import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

import PrimaryBtn from '../../components/PrimaryBtn';
import StoryHomeLayout from '../../components/StoryHomeLayout';

import { 
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
      <StoryHomeLayout>
         <Synopsis>{script.synopsis}</Synopsis>

         <Label>Dê um nome para essa história</Label>
         <Input placeholder="Seu título incrível" />

         <PrimaryBtn text="Começar a aventura!" onPress={handleNavigateToStory} />
      </StoryHomeLayout>
   );
}

export default StoryHome;