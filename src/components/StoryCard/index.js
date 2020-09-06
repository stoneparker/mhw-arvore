import React from 'react';
import { useNavigation } from '@react-navigation/native';

import user from '../../services/user';

import { 
   Container,
   Header,
   Illustration,
   Infos,
   Title,
   Author,
   AgeContainer,
   Age,
   Options,
   OptionsText,
} from './styles';

const StoryCard = (props) => {
   const { navigate } = useNavigation();
   const { story } = props;

   function navigateToStory(id) {
      // alert('aaaaaaaaa');
      if (id === 3 || id === 5) navigate('StoryHome', { story });
   }

   if (!story) return false;

   else {
      return (
         <Container onPress={() => navigateToStory(story.id)}>
            <Header color={story.color_theme}>
               <Illustration 
                  source={story.image_path} 
                  resizeMode="contain"
               />
               { story.author_id === user.id ?
               <Options>
                  <OptionsText>...</OptionsText>
               </Options>
               : false}     
            </Header>
            <Infos>
               <Title>{story.title}</Title>
               <Author>{story.author}</Author>
            </Infos>

            <AgeContainer>
               <Age>{story.age}</Age>
            </AgeContainer>
         </Container>
      );
   }
}

export default StoryCard;