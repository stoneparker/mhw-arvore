import React from 'react';
import { FlatList } from 'react-native';

import { Container, Title } from './styles';

import stories from '../../services/stories';
import user from '../../services/user';

import StoryCard from '../../components/StoryCard';

const YourStories = () => {

   const stories_ids = user.stories;

   return (
      <Container>
         <FlatList 
            data={stories}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
               <Title>Suas histórias</Title>
            }
            style={{ marginHorizontal: 5 }}
            keyExtractor={story => String(story.id)}
            numColumns={2}
            contentContainerStyle={{ padding: 10 }}
            renderItem={({ item }) => (
               <StoryCard 
                  story={stories_ids.includes(item.id) ? item : false} 
               />
            )}
         />
      </Container>
   );
}

export default YourStories;