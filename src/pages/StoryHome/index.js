import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import PrimaryBtn from '../../components/PrimaryBtn';
import StoryHomeLayout from '../../components/StoryHomeLayout';

import { 
   Title,
   Author,
   Preview,
   AgeContainer,
   AgeContent,
   Age
} from './styles';

const StoryHome = () => {
   const route = useRoute();
   const { navigate } = useNavigation();

   const { story } = route.params;

   const { pages } = story;

   function handleNavigateToHistory() {
      navigate('Story', { pages })
   }

   return (
      <StoryHomeLayout>
         <AgeContainer>
            <AgeContent>
               <Age>7</Age>   
            </AgeContent>
         </AgeContainer>
         <Title>{story.title}</Title>
         <Author>{story.author}</Author>

         <Preview numberOfLines={4}>
            {story.pages[0].page_text}
         </Preview>

         <PrimaryBtn 
            onPress={handleNavigateToHistory}
            text="Continuar lendo" 
         />
      </StoryHomeLayout>
   );
}

export default StoryHome;