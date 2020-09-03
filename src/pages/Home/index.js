import React from 'react';
import { ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import StoryCard from '../../components/StoryCard';

import stories from '../../services/stories';

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

   function navigateToThemes() {
      navigate('Themes');
   }

   return (
      <ScrollView 
         style={{ flex: 1 }}
         showsVerticalScrollIndicator={false}
      >
         <Container>
            <MainCardsContainer>
               <MainCard color="#0097A7" onPress={navigateToThemes}>
                  <MainCard1Img 
                     source={require('../../assets/pencil.png')} 
                     resizeMode="contain"
                  />
                  <MainCardTitle>
                     Crie uma história!
                  </MainCardTitle>
               </MainCard>
               <MainCard color="#F27C73">
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

            <FlatList 
               data={stories}
               style={{ marginHorizontal: 5 }}
               keyExtractor={story => String(story.id)}
               numColumns={2}
               contentContainerStyle={{ padding: 10 }}
               renderItem={({ item }) => (
                  <StoryCard
                     title={item.title}
                     author={item.author}
                     color_theme={item.color_theme}
                     age={item.age}
                     image_path={item.image_path}
                  />
               )}
            />
         </Container>
      </ScrollView>
   );
}

export default Home;