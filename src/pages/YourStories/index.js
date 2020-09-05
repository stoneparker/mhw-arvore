import React from 'react';
import { FlatList } from 'react-native';

import { Container, Title } from './styles';

import scripts from '../../services/scripts';
import user from '../../services/user';

import ScriptCard from '../../components/ScriptCard';

const YourStories = () => {

   const scripts_ids = user.scripts;

   return (
      <Container>
         <FlatList 
            ListHeaderComponent={
               <Title>Suas histórias</Title>
            }
            showsVerticalScrollIndicator={false}
            data={scripts}
            keyExtractor={script => String(script.id)}
            contentContainerStyle={{ alignItems: 'center', width: '100%', paddingTop: 20 }}
            renderItem={({ item }) => {
               return (
                  <ScriptCard script={scripts_ids.includes(item.id) ? item : ''} />
               )}}
         />
      </Container>
   );
}

export default YourStories;