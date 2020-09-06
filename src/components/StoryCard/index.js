import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

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
   Stars,
   StarsText,
   BtnDraftText,
   BtnDraft
} from './styles';

const StoryCard = (props) => {
   const { navigate } = useNavigation();
   const { story } = props;

   function navigateToStory(id) {
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
               
               { story.author_id === user.id ?
                  <Stars>
                     { story.completed ?
                        <>
                           <MaterialIcons name={'star'} size={20} color={'#FFC107'} />
                           <StarsText>{ story.num_stars }</StarsText>
                        </>
                        : 
                        <BtnDraft>
                           <BtnDraftText>Rascunho</BtnDraftText>
                        </BtnDraft>
                     }
                  </Stars>
               : false }
            </Infos>

            <AgeContainer>
               <Age>{story.age}</Age>
            </AgeContainer>
         </Container>
      );
   }
}

export default StoryCard;