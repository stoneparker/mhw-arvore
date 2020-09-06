import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import StoryCard from '../../components/StoryCard';

import stories from '../../services/stories';
import user from '../../services/user';

import { 
   Container, 
   MainCard, 
   MainCardsContainer,
   MainCard1Img,
   MainCardTitle,
   MainCard2Img,
   SessionTitle,
} from './styles';

const Home = () => {
   const { navigate } = useNavigation();

   const stories_ids = user.stories;

   function navigateToScripts() {
      navigate('Scripts');
   }

   function navigateToYourStories() {
      navigate('YourStories');
   }

   return (
      <FlatList 
         data={stories}
         style={{ marginHorizontal: 5 }}
         ListHeaderComponent={
            <Container>
               <MainCardsContainer>
                  <MainCard color="#0097A7" onPress={navigateToScripts}>
                     <MainCard1Img 
                        source={require('../../assets/pencil.png')} 
                        resizeMode="contain"
                     />
                     <MainCardTitle>
                        Crie uma história!
                     </MainCardTitle>
                  </MainCard>
                  <MainCard color="#F27C73" onPress={navigateToYourStories}>
                     <MainCardTitle>
                        Suas histórias
                     </MainCardTitle>
                     <MainCard2Img 
                        source={require('../../assets/books.png')} 
                        resizeMode="contain"
                     />
                  </MainCard>
               </MainCardsContainer>
               <SessionTitle>Outras histórias</SessionTitle>
            </Container>
         }
         showsVerticalScrollIndicator={false}
         keyExtractor={story => String(story.id)}
         numColumns={2}
         contentContainerStyle={{ padding: 10 }}
         renderItem={({ item }) => (
            <StoryCard story={stories_ids.includes(item.id) ? false : item} />
         )}
      />
   );
}

export default Home;