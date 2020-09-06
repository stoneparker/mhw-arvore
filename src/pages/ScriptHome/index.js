import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

import PrimaryBtn from '../../components/PrimaryBtn';
import StoryHomeLayout from '../../components/StoryHomeLayout';

import { 
   Synopsis,
   Label,
   Input,
   PagesAverage
} from './styles';

const StoryHome = () => {
   const route = useRoute();
   const { navigate } = useNavigation();

   const { script } = route.params;

   const pages = script.pages;

   function handleNavigateToScript() {
      navigate('Script', { pages });
   }

   return (
      <StoryHomeLayout cover={script.image_cover} color={script.color_theme}>
         <Synopsis>{script.synopsis}</Synopsis>
         <PagesAverage>
            (De {script.average_pages[0]} a {script.average_pages[1]} páginas)
         </PagesAverage>

         <Label>Dê um nome para essa história</Label>
         <Input placeholder="Seu título incrível" />

         <PrimaryBtn text="Começar a aventura!" onPress={handleNavigateToScript} />
      </StoryHomeLayout>
   );
}

export default StoryHome;