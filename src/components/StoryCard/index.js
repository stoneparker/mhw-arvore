import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { 
   Container,
   Header,
   Illustration,
   Infos,
   Title,
   Author,
   AgeContainer,
   Age,
} from './styles';

const StoryCard = (props) => {
   const { navigate } = useNavigation();
   const { story } = props;

   function navigateToStory(id) {
      if (id === 3) navigate('StoryHome', { story });
   }

   return (
      <Container onPress={() => navigateToStory(story.id)}>
         <Header color={story.color_theme}>
            <Illustration 
               source={story.image_path} 
               resizeMode="contain"
            />
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

export default StoryCard;